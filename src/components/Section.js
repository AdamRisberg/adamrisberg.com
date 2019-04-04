import React from "react";
import { css } from "emotion";

import { breakpoints } from "../theme";

function Section({ id, sectionRef, marginBottom = "80px", children }) {
  return (
    <section
      ref={sectionRef}
      id={id}
      className={css`
        max-width: 1280px;
        margin: 0 auto ${marginBottom} auto;
        padding: 0 20px;
        &:last-of-type {
          margin: 0 auto;
          padding: 0 20px 80px 20px;
          overflow: hidden;
        }
        @media (max-width: ${breakpoints.extraSmall}) {
          padding: 0 10px;
          &:last-of-type {
            padding: 0 10px 60px 10px;
          }
        }
      `}
    >
      {children}
    </section>
  );
}

export default Section;
