import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './index.module.scss';
import HtmlIcon from "../../assets/html.svg";
import CssIcon from "../../assets/css.svg";
import JsIcon from "../../assets/js.svg";
import ReactIcon from "../../assets/react.svg";
import ReduxIcon from "../../assets/redux.svg";
import GitIcon from "../../assets/git.svg";
import GitHubIcon from "../../assets/github.svg";
import ApiIcon from "../../assets/api.svg";

const skills = [
  { name: "HTML", icon: HtmlIcon },
  { name: "CSS / SCSS", icon: CssIcon },
  { name: "JavaScript", icon: JsIcon },
  { name: "React", icon: ReactIcon },
  { name: "Redux", icon: ReduxIcon },
  { name: "Git", icon: GitIcon },
  { name: "GitHub", icon: GitHubIcon },
  { name: "REST API", icon: ApiIcon },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className={s.skills}>
      <h2>{t('skills.title')}</h2>
      <div className={s.grid}>
        {skills.map((skill) => (
          <div key={skill.name}>
            <img src={skill.icon} alt={t(`skills.list.${skill.name}`)} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
