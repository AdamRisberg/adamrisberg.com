import React from "react";
import { css } from "emotion";
import { breakpoints } from "../data";

function SectionTitle({ text }) {
  return (
    <React.Fragment>
      <h3
        className={css`
          font-size: 2rem;
          font-weight: 400;
          margin-bottom: 6px;
          padding-top: 6px;
          z-index: 10;
        `}
      >
        {text}
      </h3>
      <div
        className={css`
          height: 4px;
          background-color: #eee;
          background: linear-gradient(to right, #eee, #151922);
          margin-bottom: 40px;
          @media (max-width: ${breakpoints.small}) {
            background: linear-gradient(to right, #151922, #eee, #151922);
          }
        `}
      />
    </React.Fragment>
  );
}

export default SectionTitle;
