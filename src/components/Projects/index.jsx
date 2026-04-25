import React from "react";
import s from "./index.module.scss";
import ProjectCard from "../Project_card";
import ProjectImage_1 from "../../assets/project_preview_1.jpg";
import ProjectImage_2 from "../../assets/project_preview_2.jpg";
import ProjectImage_3 from "../../assets/project_preview_3.jpg"

const projects = [
  {
    id: 1,
    title: "Online Store",
    description:
      "A multi-page online store built in collaboration with another frontend developer. Features include product sorting and filtering, adding items to favorites and the cart, and submitting orders via a validated form.",
    image: ProjectImage_1,
    stack: "React, Redux, CSS, JavaScript",
    github: "https://github.com/anazhur/Code_Crafters/tree/dev",
    demo: "https://code-crafters-jqpp.onrender.com/",
  },
    {
    id: 2,
    title: "Tic Tac Toe",
    description:
      "A modern implementation of the classic Tic Tac Toe game with a clean UI, smart computer opponent, and smooth user experience.",
    image: ProjectImage_2,
    stack: "React, CSS, JavaScript",
    github: "https://github.com/anazhur/tic-tac-toe-react",
    demo: "https://anazhur.github.io/tic-tac-toe-react/",
  },
      {
    id: 3,
    title: "Dashboard UI",
    description:
      "A clean and minimal dashboard interface with customizable themes, combining productivity tools and ambient experience.",
    image: ProjectImage_3,
    stack: "React, SCSS, Context API",
    github: "https://github.com/anazhur/dashboard-ui",
    demo: "https://anazhur.github.io/dashboard-ui/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={s.projects}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          {...project}
          reverse={index % 2 === 1}
        />
      ))}
    </section>
  );
};

export default Projects;
