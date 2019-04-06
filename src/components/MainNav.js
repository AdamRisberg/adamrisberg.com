import React from "react";
import { css } from "emotion";

import HamburgerButton from "./HamburgerButton";
import SocialLink from "./SocialLink";
import NavItem from "./NavItem";

import { breakpoints } from "../theme";
import { handleLinkClick } from "../utils";

const navStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  height: 45px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`;

const navItemStyle = css`
  display: inline-block;
  margin-right: 24px;
  cursor: pointer;
`;

function MainNav({ openNav, showHamburger, sectionRefs }) {
  return (
    <nav className={navStyle}>
      <HamburgerButton onClick={openNav} show={showHamburger} />
      <ul
        className={css`
          flex-grow: 1;
          @media (max-width: ${breakpoints.large}) {
            display: none;
          }
        `}
      >
        <NavItem
          className={navItemStyle}
          onClick={handleLinkClick(sectionRefs.projects)}
          href="#projects"
          label="PORTFOLIO"
        />
        <NavItem
          className={navItemStyle}
          onClick={handleLinkClick(sectionRefs.skills)}
          href="#skills"
          label="SKILLS"
        />
        <NavItem
          className={navItemStyle}
          onClick={handleLinkClick(sectionRefs.about)}
          href="#about"
          label="ABOUT"
        />
        <NavItem
          className={navItemStyle}
          onClick={handleLinkClick(sectionRefs.contact)}
          href="#contact"
          label="CONTACT"
        />
      </ul>
      <div
        className={css`
          & a {
            margin-left: 20px;
          }
          @media (max-width: ${breakpoints.large}) {
            display: none;
          }
        `}
      >
        <SocialLink
          type="LinkedIn"
          href="https://www.linkedin.com/in/adamrisberg"
          width="20px"
          height="20px"
        />
        <SocialLink
          type="Github"
          href="https://github.com/myniztan"
          width="20px"
          height="20px"
        />
        <SocialLink
          type="CodePen"
          href="https://codepen.io/myniztan"
          width="20px"
          height="20px"
        />
      </div>
    </nav>
  );
}

export default MainNav;
