import React from "react";
import { css } from "emotion";

import { breakpoints, colors } from "../theme";

function SectionTitle({ text, marginBottom = "40px" }) {
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
          background-color: ${colors.text};
          background: linear-gradient(
            to right,
            ${colors.text},
            ${colors.background}
          );
          margin-bottom: ${marginBottom};
          @media (max-width: ${breakpoints.small}) {
            background: linear-gradient(
              to right,
              ${colors.background},
              ${colors.text},
              ${colors.background}
            );
          }
        `}
      />
    </React.Fragment>
  );
}

export default SectionTitle;
