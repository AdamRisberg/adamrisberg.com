import React from "react";
import { css } from "emotion";

import Section from "./Section";
import SectionTitle from "./SectionTitle";

import about from "../data/about";
import { breakpoints } from "../theme";

function About({ sectionRef }) {
  return (
    <Section sectionRef={sectionRef} id="about">
      <SectionTitle text="ABOUT" />
      <div
        className={css`
          & p {
            margin-bottom: 20px;
            text-align: left;
            transition: transform 1s, opacity 1s;
          }
          @media (max-width: ${breakpoints.extraSmall}) {
            padding: 0 10px;
          }
        `}
      >
        {about.myJourneyParagraphs.map(p => (
          <p key={p.substr(0, 10)}>{p}</p>
        ))}
      </div>
    </Section>
  );
}

export default About;
