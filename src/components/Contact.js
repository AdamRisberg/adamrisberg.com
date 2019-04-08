import React from "react";
import { css } from "emotion";

import Section from "./Section";
import SectionTitle from "./SectionTitle";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

import { breakpoints } from "../theme";
import { useInView } from "../utils";

function Contact({ sectionRef }) {
  const show = useInView(sectionRef, 200);

  return (
    <Section sectionRef={sectionRef} id="contact">
      <SectionTitle text="CONTACT" />
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        <div
          className={css`
            width: 50%;
            padding-right: 4%;
            transition: transform 1s, opacity 1s;
            opacity: ${show ? "1" : "0"};
            transform: translateY(${show ? "0" : "200px"});
            @media (max-width: ${breakpoints.large}) {
              transition: transform 1s 0.2s, opacity 1s 0.2s;
              width: 100%;
              padding: 0;
              order: 1;
            }
            @media (max-width: ${breakpoints.small}) {
              opacity: 1;
              transform: translateY(0);
            }
          `}
        >
          <ContactForm />
        </div>
        <div
          className={css`
            width: 50%;
            padding-left: 4%;
            transition: transform 1s 0.2s, opacity 1s 0.2s;
            opacity: ${show ? "1" : "0"};
            transform: translateY(${show ? "0" : "200px"});
            padding-top: calc(1rem + 4px);
            @media (max-width: ${breakpoints.large}) {
              transition: transform 1s, opacity 1s;
              width: 100%;
              padding: 0;
              margin-bottom: 50px;
            }
            @media (max-width: ${breakpoints.small}) {
              opacity: 1;
              transform: translateY(0);
            }
          `}
        >
          <ContactInfo />
        </div>
      </div>
    </Section>
  );
}

export default Contact;
