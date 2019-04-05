import React from "react";
import { css } from "emotion";

import { ListCard, TextCard } from "./aboutCards";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

import about from "../data/about";
import { breakpoints } from "../theme";

const cardListStyle = css`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px 0 -10px;
`;

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

function CardList({ children }) {
  return (
    <div className={cardListStyle}>
      {React.Children.map(children, child => (
        <div className={colStyle}>{child}</div>
      ))}
    </div>
  );
}

function About({ sectionRef }) {
  return (
    <Section sectionRef={sectionRef} marginBottom="0" id="about">
      <SectionTitle text="ABOUT" />
      <TextCard title="MY JOURNEY" paragraphs={about.myJourneyParagraphs} />
      <CardList>
        <ListCard title={"EDUCATION"} list={about.education} />
        <ListCard title={"HOBBIES"} list={about.hobbies} />
      </CardList>
    </Section>
  );
}

export default About;
