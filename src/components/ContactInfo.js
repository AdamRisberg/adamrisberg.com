import React from "react";
import { css } from "emotion";

import { LinkedInIcon, GithubIcon, CodePenIcon } from "./icons";
import { breakpoints } from "../data";

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
          display: block;
          margin-bottom: 30px;
        `}
        href="mailto:myniztan@hotmail.com"
      >
        myniztan@hotmail.com
      </a>
      <a
        className={anchorStyle}
        aria-label="Linkedin"
        href="https://www.linkedin.com/in/adamrisberg"
      >
        <LinkedInIcon width="32px" height="32px" />
      </a>
      <a
        className={anchorStyle}
        aria-label="Github"
        href="https://github.com/myniztan"
      >
        <GithubIcon width="32px" height="32px" />
      </a>
      <a
        className={anchorStyle}
        aria-label="Codepen"
        href="https://codepen.io/myniztan/"
      >
        <CodePenIcon width="32px" height="32px" />
      </a>
    </React.Fragment>
  );
}

export default ContactInfo;
