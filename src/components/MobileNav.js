import React from "react";
import { LinkedInIcon, GithubIcon, CodePenIcon } from "./icons";
import { css } from "emotion";

import { handleLinkClick } from "../utils";

const liStyle = css`
  list-style: none;
  margin: 0;
  text-align: center;
  font-size: 1.5rem;
  margin: 5px 0;
  letter-spacing: 0.2rem;
  transform: translateY(-1200px);
`;

function MobileNav({ open, closeNav, sectionRefs }) {
  return (
    <nav
      className={css`
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #151922;
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translateY(${open ? "0" : "-100%"});
        transition: transform 0.3s ease-out;
      `}
    >
      <div
        className={css`
          font-size: 1.8rem;
          line-height: 1.8rem;
          margin-top: 8px;
          cursor: pointer;
          margin-left: auto;
          margin-right: 20px;
          transition: color 0.2s;
          &:hover {
            color: rgba(181, 210, 234, 1);
          }
        `}
        onClick={closeNav}
      >
        &#10005;
      </div>
      <div
        className={css`
          margin-top: -20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <ul
          className={css`
            margin-bottom: 20px;
            & li {
              list-style: none;
              margin: 0;
              text-align: center;
              font-size: 1.5rem;
              margin: 5px 0;
              letter-spacing: 0.2rem;
              transform: translateY(${open ? "0" : "-1200px"});
            }
            ${createListTransitions(open, 3)}
          `}
        >
          <li className={liStyle}>
            <a onClick={handleLinkClick(sectionRefs.projects, closeNav)} href="#projects">PROJECTS</a>
          </li>
          <li className={liStyle}>
            <a onClick={handleLinkClick(sectionRefs.about, closeNav)} href="#about">ABOUT</a>
          </li>
          <li className={liStyle}>
            <a onClick={handleLinkClick(sectionRefs.contact, closeNav)} href="#contact">CONTACT</a>
          </li>
        </ul>
        <div
          className={css`
            text-align: center;
            transform: translateY(${open ? "0" : "-1200px"});
            transition: transform 0.3s 0.2s;

            & a {
              margin: 0 12px;
            }
          `}
        >
          <a
            aria-label="Linkedin"
            href="https://www.linkedin.com/in/adamrisberg"
          >
            <LinkedInIcon width="24px" height="24px" />
          </a>
          <a aria-label="Github" href="https://github.com/myniztan">
            <GithubIcon width="24px" height="24px" />
          </a>
          <a aria-label="Codepen" href="https://codepen.io/myniztan/">
            <CodePenIcon width="24px" height="24px" />
          </a>
        </div>
      </div>
    </nav>
  );
}

function createListTransitions(open, count) {
  const speed = ".3s";

  let transitions = "";

  for (let i = 1; i <= count; i++) {
    if (open) {
      transitions += `
        & li:nth-of-type(${count - i + 1}) {
          transition: transform ${speed} .${3 + i}s;
        }
      `;
    }
  }
  return transitions;
}

export default MobileNav;
