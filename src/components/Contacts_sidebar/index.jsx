import React from "react";
import { useTranslation } from "react-i18next";
import s from "./index.module.scss";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import { smoothScroll } from "../../utils/smoothScroll";

const ContactsSidebar = () => {
  const { t } = useTranslation();

  const handleEmailClick = () => {
    smoothScroll("contact"); // прокрутка к секции с id="contact"
  };

  const icons = [
    {
      component: <FaGithub />,
      text: t("contacts.github"),
      href: "https://github.com/anazhur",
      external: true,
    },
    {
      component: <FaLinkedin />,
      text: t("contacts.linkedin"),
      href: "https://www.linkedin.com/in/anastasiazhuravleva/",
      external: true,
    },
    {
      component: <FaEnvelope />,
      text: t("contacts.email"),
      onClick: handleEmailClick,
    },
    {
      component: <FaFileDownload />,
      text: t("contacts.downloadCV"),
      href: "/resume(ENG).pdf",
      download: "Anastasia_Zhuravleva_CV.pdf",
    },
  ];

  return (
    <div className={s.sidebar}>
      {icons.map((icon, idx) => {
        const content = (
          <>
            <span>{icon.text}</span>
            {icon.component}
          </>
        );

        return icon.href ? (
          <a
            key={idx}
            href={icon.href}
            target={icon.external ? "_blank" : undefined}
            rel={icon.external ? "noopener noreferrer" : undefined}
            download={icon.download}
            className={s.iconWrapper}
          >
            {content}
          </a>
        ) : (
          <button key={idx} onClick={icon.onClick} className={s.iconWrapper}>
            {content}
          </button>
        );
      })}
    </div>
  );
};

export default ContactsSidebar;
