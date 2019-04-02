import React from "react";
import { css } from "emotion";

import { colors } from "../theme";

function Footer() {
  return (
    <footer
      className={css`
        text-align: right;
        background-color: ${colors.black};
        font-size: 0.8rem;
        color: ${colors.textDark};
      `}
    >
      <div
        className={css`
          max-width: 1280px;
          margin: 0 auto;
          padding: 6px 30px;
        `}
      >
        Adam Risberg © 2019
      </div>
    </footer>
  );
}

export default Footer;
