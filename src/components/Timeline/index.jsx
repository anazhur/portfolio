import React from "react";
import { useTranslation } from "react-i18next";
import s from "./index.module.scss";

const timelineData = [
  {
    year: "2018 – Sep 2020",
    title: "Retail Sales Manager",
    description:
      "Handled online sales through the company website and marketplaces. Learned a lot about customer needs and clear communication.",
  },
  {
    year: "Sep 2020 – Nov 2022",
    title: "B2B Sales Manager",
    description:
      "Worked with business clients, managed orders and negotiations, developed organizational and problem-solving skills.",
  },
  {
    year: "Nov 2022 – Mar 2024",
    title: "Relocation & Language Learning",
    description:
      "Moved to Germany and studied German up to B2 level, gaining discipline and adaptability.",
  },
  {
    year: "Mar 2024 – Jan 2025",
    title: "Frontend Development Courses",
    description:
      "Worked on projects designed to simulate real-world scenarios, building experience with React, Redux, JavaScript, and CSS, and learning to write clean, reusable code.",
  },
  {
    year: "Now",
    title: "Looking for a Junior Frontend Role",
    description:
      "Actively improving my skills and ready to apply them on real projects.",
  },
];

const VerticalTimeline = () => {
  const { t } = useTranslation();

  const timeline = timelineData.map((item, index) => ({
    ...item,
    title: t(`timeline.items.${index}.title`),
    description: t(`timeline.items.${index}.description`),
  }));

  return (
    <section id="timeline" className={s.timeline}>
      <h2>{t("timeline.title")}</h2>
      <div className={s.wrapper}>
        <div className={s.centerLine}></div>

        {timeline.map((item, index) => (
          <div key={index} className={s.rowWrapper}>
            <div className={s.dot}></div>

            <div className={`${s.row} ${index % 2 === 0 ? s.row1 : s.row2}`}>
              <section>
                <div className={s.details}>
                  <span className={s.year}>{item.year}</span>
                  <span className={s.title}>{item.title}</span>
                </div>
                <p>{item.description}</p>
              </section>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VerticalTimeline;
