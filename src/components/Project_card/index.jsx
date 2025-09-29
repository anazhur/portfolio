import React from "react";
import { useTranslation } from "react-i18next";
import s from "./index.module.scss";

const ProjectCard = ({
  title,
  description,
  image,
  stack,
  github,
  demo,
  reverse,
}) => {
  const { t } = useTranslation();

  return (
    <div className={`${s.card} ${reverse ? s.reverse : ""}`}>
      <div className={s.imageBlock}>
        <img src={image} alt={title} />
      </div>
      <div className={s.contentBlock}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <strong>{t("projects.stack")}:</strong> {stack}
        </p>
        <div className={s.links}>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${s.btn} ${s.github}`}
          >
            {t("projects.github")}
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`${s.btn} ${s.demo}`}
          >
            {t("projects.demo")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
