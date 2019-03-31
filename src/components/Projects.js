import React from "react";
import { css } from "emotion";
import ProjectCard from "./ProjectCard";

import Section from "./Section";
import SectionTitle from "./SectionTitle";

import { projects, breakpoints } from "../data";

function Projects() {
  return (
    <Section>
      <SectionTitle text="PROJECTS" />
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
          margin: 0 -10px -40px -10px;
        `}
      >
        {projects.map(project => (
          <div
            key={`project-${project.title}`}
            className={css`
              width: 33.333%;
              padding: 0 10px;
              margin-bottom: 40px;

              @media (max-width: ${breakpoints.medium}) {
                width: 50%;
              }

              @media (max-width: ${breakpoints.small}) {
                width: 100%;
              }
            `}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
