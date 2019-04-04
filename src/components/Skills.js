import React from "react";
import { css } from "emotion";
import { ListCard } from "./aboutCards";

import Section from "./Section";
import SectionTitle from "./SectionTitle";

import { about } from "../data";
import { breakpoints } from "../theme";

const colStyle = css`
  width: 33.333%;
  padding: 0 10px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  @media (max-width: ${breakpoints.large}) {
    width: 50%;
    margin-bottom: 0;
    &:last-of-type { margin-bottom: 40px; }
  }
  @media (max-width: ${breakpoints.small}) {
    width: 100%;
  }
`;

const lastCardStyle = css`
  @media (max-width: ${breakpoints.large}) {
    width: 50%;
    padding: 0 10px;
  }
  @media (max-width: ${breakpoints.small}) {
    padding: 0;
    width: 100%;
  }
`;

function Skills({ sectionRef }) {
  return (
    <Section sectionRef={sectionRef} marginBottom="0" id="skills">
      <SectionTitle text="SKILLS" />
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
          margin: 0 -10px;
        `}
      >
        <div className={colStyle}>
          <ListCard title={"LANGUAGES"} list={about.languages} />
          <ListCard
            title={"FRONT END"}
            list={about.frontEnd}
          />
        </div>
        <div className={colStyle}>
          <ListCard title={"BACK END"} list={about.backEnd} />
          <ListCard title={"TOOLS"} list={about.tools} />
        </div>
        <div
          className={css`
          ${colStyle}
          @media (max-width: ${breakpoints.large}) {
            width: 100%;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 0;
          }
          @media (max-width: ${breakpoints.small}) {
            padding: 0 10px;
          }
        `}
        >
          <ListCard
            cardStyle={lastCardStyle}
            title={"MULTIMEDIA"}
            list={about.multimedia}
          />
          <ListCard
            cardStyle={lastCardStyle}
            title={"OTHER SKILLS"}
            list={about.otherSkills}
          />
        </div>
      </div>
    </Section>
  );
}

export default Skills;
