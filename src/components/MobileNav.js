import React from "react";
import { css } from "emotion";
import FocusLock from "react-focus-lock";

import SocialLink from "./SocialLink";
import NavItem from "./NavItem";
import Modal from "./Modal";

import { colors, styles } from "../theme";
import { handleLinkClick, useBoolDelay } from "../utils";

const liStyle = css`
  list-style: none;
  margin: 0;
  text-align: center;
  font-size: 1.5rem;
  margin: 5px 0;
  letter-spacing: 0.2rem;
  transform: translateY(-1200px);
`;

function NavList({ open, children }) {
  const childCount = React.Children.count(children);

  return (
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
        ${createListTransitions(open, childCount)}
      `}
    >
      {children}
    </ul>
  );
}

function CloseButton({ onClick, addMarginRight = 0 }) {
  return (
    <button
      aria-label="Close"
      className={css`
        ${styles.blankButton}
        color: ${colors.text};
        font-size: 1.8rem;
        line-height: 1.8rem;
        margin-top: 8px;
        cursor: pointer;
        margin-left: auto;
        margin-right: ${25 + addMarginRight}px;
        transition: color 0.2s;
        &:hover {
          color: ${colors.secondary};
        }
      `}
      onClick={onClick}
    >
      &#10005;
    </button>
  );
}

function MobileNav({ open, closeNav, sectionRefs, scrollBarWidth }) {
  const show = useBoolDelay(open, 0, 300);
  const render = show || open;
  const visible = show && open;

  if (!render) {
    return null;
  }

  return (
    <FocusLock>
      <Modal
        className={css`
          transform: translateY(${visible ? "0" : "-100%"});
          transition: transform 0.3s ease-out;
        `}
        show={visible}
      >
        {visible && (
          <CloseButton onClick={closeNav} addMarginRight={scrollBarWidth} />
        )}
        <nav
          className={css`
            margin-top: -20px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
          `}
        >
          <NavList open={visible}>
            <NavItem
              className={liStyle}
              onClick={handleLinkClick(sectionRefs.projects, closeNav)}
              href="#projects"
              label="PORTFOLIO"
            />
            <NavItem
              className={liStyle}
              onClick={handleLinkClick(sectionRefs.skills, closeNav)}
              href="#skills"
              label="SKILLS"
            />
            <NavItem
              className={liStyle}
              onClick={handleLinkClick(sectionRefs.about, closeNav)}
              href="#about"
              label="ABOUT"
            />
            <NavItem
              className={liStyle}
              onClick={handleLinkClick(sectionRefs.contact, closeNav)}
              href="#contact"
              label="CONTACT"
            />
          </NavList>
          <div
            className={css`
              text-align: center;
              transform: translateY(${visible ? "0" : "-1200px"});
              transition: transform 0.3s 0.2s;
              & a {
                margin: 0 12px;
              }
            `}
          >
            <SocialLink
              type="LinkedIn"
              href="https://www.linkedin.com/in/adamrisberg"
              width="24px"
              height="24px"
            />
            <SocialLink
              type="Github"
              href="https://github.com/myniztan"
              width="24px"
              height="24px"
            />
            <SocialLink
              type="CodePen"
              href="https://codepen.io/myniztan"
              width="24px"
              height="24px"
            />
          </div>
        </nav>
      </Modal>
    </FocusLock>
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
