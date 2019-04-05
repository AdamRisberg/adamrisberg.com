import React from "react";
import { css } from "emotion";

import { colors, breakpoints } from "../theme";

const buttonStyle = css`
  padding: 6px 15px;
  font-weight: 500;
  font-size: 1.1rem;
  background-color: ${colors.background};
  color: ${colors.text};
  cursor: pointer;
  border: none;
  transition: background-color 0.2s;
  &:hover,
  &:disabled {
    background-color: ${colors.primary};
    color: ${colors.white};
  }
  &:disabled {
    cursor: default;
    background-color: ${colors.secondaryDarker};
    font-weight: 600;
  }
  @media (max-width: ${breakpoints.small}) {
    width: 100%;
  }
`;

function ButtonSwitcher({ labels = [], children }) {
  const [activeIdx, setActiveIdx] = React.useState(0);

  return (
    <React.Fragment>
      <div
        className={css`
          margin-bottom: 20px;
          display: inline-block;
          border: 2px solid ${colors.secondaryDarker};
          @media (max-width: ${breakpoints.small}) {
            display: block;
            max-width: 420px;
            margin: 0 auto 20px auto;
          }
        `}
      >
        {labels.map((label, i) => (
          <button
            key={label}
            className={buttonStyle}
            onClick={() => setActiveIdx(i)}
            disabled={i === activeIdx}
          >
            {label}
          </button>
        ))}
      </div>
      {children[activeIdx]}
    </React.Fragment>
  );
}

export default ButtonSwitcher;
