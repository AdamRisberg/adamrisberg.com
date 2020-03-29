import React from "react";
import { css } from "emotion";

import ListCard from "./ListCard";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

import skills from "../data/skills";
import { breakpoints } from "../theme";

const containerStyle = css`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

const colStyle = css`
  width: 33.333%;
  padding: 0 10px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  @media (max-width: ${breakpoints.large}) {
    width: 50%;
    margin-bottom: 0;
    &:last-of-type {
      margin-bottom: 40px;
    }
  }
  @media (max-width: ${breakpoints.small}) {
    width: 100%;
  }
`;

const lastColStyle = css`
  @media (max-width: ${breakpoints.large}) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0;
  }
  @media (max-width: ${breakpoints.small}) {
    padding: 0 10px;
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
      <div className={containerStyle}>
        <div className={colStyle}>
          <ListCard title={"LANGUAGES"} list={skills.languages} />
          <ListCard title={"FRONT END"} list={skills.frontEnd} />
        </div>
        <div className={colStyle}>
          <ListCard title={"BACK END"} list={skills.backEnd} />
          <ListCard title={"TOOLS"} list={skills.tools} />
        </div>
        <div
          className={css`
            ${colStyle} ${lastColStyle}
          `}
        >
          <ListCard
            cardStyle={lastCardStyle}
            title={"MULTIMEDIA"}
            list={skills.multimedia}
          />
          <ListCard
            cardStyle={lastCardStyle}
            title={"OTHER SKILLS"}
            list={skills.otherSkills}
          />
        </div>
      </div>
    </Section>
  );
}

export default Skills;
