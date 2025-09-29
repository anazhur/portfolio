import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import s from "./index.module.scss";

const ContactForm = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", text: t("form.validation.fillAll") });
      return false;
    }
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(form.email.trim())) {
      setStatus({ type: "error", text: t("form.validation.emailInvalid") });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!validate()) return;

    setLoading(true);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    };

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      setStatus({ type: "success", text: t("form.status.success") });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", text: t("form.status.error") });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={s.contactSection}>
      <h2>{t("form.title")}</h2>

      <form className={s.form} onSubmit={handleSubmit}>
        <label>
          <span>{t("form.name")}</span>
          <input name="name" value={form.name} onChange={handleChange} />
        </label>

        <label>
          <span>{t("form.email")}</span>
          <input name="email" value={form.email} onChange={handleChange} />
        </label>

        <label>
          <span>{t("form.subject")}</span>
          <input name="subject" value={form.subject} onChange={handleChange} />
        </label>

        <label>
          <span>{t("form.message")}</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="6"
          />
        </label>

        <div className={s.actions}>
          <button type="submit" className={s.sendBtn} disabled={loading}>
            {loading ? t("form.sending") : t("form.send")}
          </button>
        </div>

        {status && (
          <div className={status.type === "success" ? s.success : s.error}>
            {status.text}
          </div>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
