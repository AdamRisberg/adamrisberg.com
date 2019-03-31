import React from "react";
import { css } from "emotion";

function Section({ children }) {
  return (
    <section
      className={css`
        max-width: 1280px;
        margin: 0 auto 80px auto;
        padding: 0 20px;
      `}
    >
      {children}
    </section>
  );
}

export default Section;
