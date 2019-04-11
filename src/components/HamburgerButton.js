import React from "react";
import { css } from "emotion";

import { HamburgerIcon } from "./icons";
import { breakpoints, styles } from "../theme";

function HamburgerButton({ onClick, show }) {
  return (
    <button
      aria-label="Menu"
      className={css`
        ${styles.blankButton}
        position: absolute;
        top: 5px;
        right: 16px;
        padding: 0 4px;
        z-index: 999;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.2s 0.1s;
        @media (max-width: ${breakpoints.large}) {
          visibility: ${show ? "visible" : "hidden"};
          opacity: ${show ? "1" : "0"};
        }
      `}
      tabIndex={show ? "0" : "-1"}
      onClick={onClick}
    >
      <HamburgerIcon />
    </button>
  );
}

export default HamburgerButton;
