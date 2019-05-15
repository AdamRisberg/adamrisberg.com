import React from "react";
import { css } from "emotion";

import SocialLink from "./SocialLink";

import { breakpoints } from "../theme";

const anchorStyle = css`
  margin-right: 24px;
  @media (max-width: ${breakpoints.small}) {
    margin: 0 12px;
  }
`;

function ContactInfo() {
  return (
    <React.Fragment>
      <p
        className={css`
          margin-bottom: 30px;
        `}
      >
        I’m available for freelance and currently seeking a full time position.
        If you're interested, feel free to send me an email or fill out the
        provided form.
      </p>
      <div
        className={css`
          font-weight: 500;
          font-size: 1.1rem;
        `}
      >
        Email
      </div>
      <a
        className={css`
          display: inline-block;
          margin-bottom: 30px;
        `}
        href="mailto:myniztan@hotmail.com"
      >
        myniztan@hotmail.com
      </a>
      <br />
      <SocialLink
        className={anchorStyle}
        type="LinkedIn"
        href="https://www.linkedin.com/in/adamrisberg"
        width="32px"
        height="32px"
      />
      <SocialLink
        className={anchorStyle}
        type="Github"
        href="https://github.com/adamrisberg"
        width="32px"
        height="32px"
      />
      <SocialLink
        className={anchorStyle}
        type="CodePen"
        href="https://codepen.io/adamrisberg"
        width="32px"
        height="32px"
      />
    </React.Fragment>
  );
}

export default ContactInfo;
