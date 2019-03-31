import React from "react";
import { css } from "emotion";

import Section from "./Section";
import SectionTitle from "./SectionTitle";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

import { breakpoints } from "../data";

function Contact() {
  return (
    <Section>
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
            @media (max-width: ${breakpoints.medium}) {
              width: 100%;
              padding: 0;
              order: 1;
            }
          `}
        >
          <ContactForm />
        </div>
        <div
          className={css`
            width: 50%;
            padding-left: 4%;
            padding-top: calc(1rem + 4px);
            @media (max-width: ${breakpoints.medium}) {
              width: 100%;
              padding: 0;
              margin-bottom: 50px;
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
