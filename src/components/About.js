import React from "react";
import { css } from "emotion";
import { ListCard, TextCard } from "./aboutCards";

import Section from "./Section";
import SectionTitle from "./SectionTitle";

import { about, breakpoints } from "../data";

const colStyle = css`
  width: 33.333%;
  padding: 0 10px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  @media (max-width: ${breakpoints.medium}) {
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

const lastCardStyle = css`
  @media (max-width: ${breakpoints.medium}) {
    width: 50%;
    padding: 0 10px;
  }
  @media (max-width: ${breakpoints.small}) {
    width: 100%;
  }
`;

function About({ sectionRef }) {
  return (
    <Section sectionRef={sectionRef} id="about">
      <SectionTitle text="ABOUT" />
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
          margin: 0 -10px -40px -10px;
        `}
      >
        <div className={colStyle}>
          <ListCard title={"MAIN SKILLS"} list={about.mainSkills} />
          <ListCard
            title={"CURRENTLY LEARNING"}
            list={about.currentlyLearning}
          />
        </div>
        <div className={colStyle}>
          <ListCard title={"TOOLS"} list={about.tools} />
          <ListCard title={"EDUCATION"} list={about.education} />
        </div>
        <div
          className={css`
          ${colStyle}
          @media (max-width: ${breakpoints.medium}) {
            width: 100%;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 0;
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
            title={"HOBBIES"}
            list={about.hobbies}
          />
        </div>
      </div>
      <TextCard title="MY JOURNEY" paragraphs={about.myJourneyParagraphs} />
    </Section>
  );
}

export default About;
