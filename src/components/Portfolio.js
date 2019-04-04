import React from "react";
import { css } from "emotion";

import ProjectCard from "./ProjectCard";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import ButtonSwitcher from "./ButtonSwitcher";
import Resume from "./Resume";

import { projects } from "../data";
import { breakpoints } from "../theme";
import { useInView } from "../utils";

function Portfolio({ sectionRef }) {
  const show = useInView(sectionRef, 200);

  return (
    <Section sectionRef={sectionRef} id="projects">
      <SectionTitle text="PORTFOLIO" marginBottom="20px" />
      <ButtonSwitcher labels={["Web Projects", "Resume"]}>
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
        <Resume />
      </ButtonSwitcher>
    </Section>
  );
}

export default Portfolio;
