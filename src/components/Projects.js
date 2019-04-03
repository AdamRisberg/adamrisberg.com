import React from "react";
import { css } from "emotion";
import ProjectCard from "./ProjectCard";

import Section from "./Section";
import SectionTitle from "./SectionTitle";

import { projects } from "../data";
import { breakpoints } from "../theme";
import { useInView } from "../utils";

function Projects({ sectionRef }) {
  const show = useInView(sectionRef, 200);

  return (
    <Section sectionRef={sectionRef} id="projects">
      <SectionTitle text="PROJECTS" />
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
          margin: 0 -10px -40px -10px;
        `}
      >
        {projects.map((project, i) => (
          <div
            key={`project-${project.title}`}
            className={css`
              width: 33.333%;
              padding: 0 10px;
              margin-bottom: 40px;
              transition: opacity 1s ${i / 5}s, transform 1s ${i / 5}s;
              opacity: ${show ? "1" : "0"};
              transform: translateY(${show ? "0" : "200px"});
              @media (max-width: ${breakpoints.large}) {
                width: 50%;
              }
              @media (max-width: ${breakpoints.small}) {
                width: 100%;
                opacity: 1;
                transform: translateY(0);
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
