import React from "react";
import { css } from "emotion";

function Footer() {
  return (
    <footer
      className={css`
        text-align: right;
        background-color: #000;
        font-size: 0.8rem;
        color: #ddd;
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
