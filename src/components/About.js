import React from "react";
import { css } from "emotion";
import { ListCard, TextCard } from "./aboutCards";

import Section from "./Section";
import SectionTitle from "./SectionTitle";

import { about } from "../data";
import { breakpoints } from "../theme";

const colStyle = css`
  width: 50%;
  padding: 0 10px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.small}) {
    width: 100%;
    &:first-of-type {
      margin-bottom: 0;
    }
  }
`;

function About({ sectionRef }) {
  return (
    <Section sectionRef={sectionRef} marginBottom="0" id="about">
      <SectionTitle text="ABOUT" />
      <TextCard title="MY JOURNEY" paragraphs={about.myJourneyParagraphs} />
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
          margin: 0 -10px 0 -10px;
        `}
      >
        <div className={colStyle}>
          <ListCard title={"EDUCATION"} list={about.education} />
        </div>
        <div className={colStyle}>
          <ListCard title={"HOBBIES"} list={about.hobbies} />
        </div>
      </div>
      
    </Section>
  );
}

export default About;
