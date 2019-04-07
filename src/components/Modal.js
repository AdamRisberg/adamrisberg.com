import React from "react";
import { css } from "emotion";

import { colors } from "../theme";

function Modal({ className, children }) {
  return (
    <div
      className={css`
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: ${colors.background};
        display: flex;
        flex-direction: column;
        align-items: center;
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Modal;
