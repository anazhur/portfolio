import React from "react";
import { useTranslation } from "react-i18next";
import Contact_btn from "../Contact_btn";
import Portrait from "../../assets/portrait.png";
import s from "./index.module.scss";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={s.about}>
      <div className={s.text_block}>
        <div>
          <h2>{t("about.title")}</h2>
          <p>{t("about.paragraph1")}</p>
          <p>
            {t("about.paragraph2.part1")}{" "}
            <strong>{t("about.paragraph2.highlight")}</strong>
            {t("about.paragraph2.part2")}
          </p>
          <p>{t("about.paragraph3")}</p>
        </div>
        <div className={s.btn}><Contact_btn /></div>
      </div>
      <div className={s.portrait_block}>
        <img src={Portrait} alt={t("about.portraitAlt")} />
      </div>
    </section>
  );
};

export default About;
