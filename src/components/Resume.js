import React from "react";
import { css } from "emotion";

import { colors, breakpoints } from "../theme";
import { resume } from "../data";

function Container({ children }) {
  return (
    <div
      className={css`
        display: flex;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 17px;
        font-size: 14px;
        text-align: left;
        & a:hover { text-decoration: underline; }
        @media (max-width: ${breakpoints.medium}) {
          flex-direction: column;
        }
      `}
    >
      {children}
    </div>
  );
}

function SideBar({ children }) {
  return (
    <div
      className={css`
        width: 210px;
        flex-shrink: 0;
        background-color: ${colors.resumePrimary};
        color: ${colors.text};
        & a,
        & a:visited { color: ${colors.text}; }
        @media (max-width: ${breakpoints.medium}) {
          display: flex;
          flex-wrap: wrap;
          padding: 0 5px 10px 5px;
          width: 100%;
          background-color: ${colors.text};
          color: ${colors.black};
          & a,
          & a:visited { color: ${colors.black}; }
        }
        @media (max-width: ${breakpoints.extraSmall}) {
          padding: 0 0 10px 0;
        }
      `}
    >
      {children}
    </div>
  );
}

function Main({ children }) {
  return (
    <div
      className={css`
        padding: 10px 20px;
        width: 100%;
        background-color: ${colors.text};
        color: ${colors.black};
        @media (max-width: ${breakpoints.extraSmall}) {
          padding: 5px 15px;
        }
      `}
    >
      {children}
    </div>
  );
}

function SideBarSection({ title, skills }) {
  return (
    <div
      className={css`
        padding-bottom: 5px;
        @media (max-width: ${breakpoints.medium}) {
          width: 50%;
          padding: 0 15px;
        }
        @media (max-width: ${breakpoints.extraSmall}) {
          width: 100%;
        }
      `}
    >
      <h2
        className={css`
          background-color: ${colors.resumeSecondary};
          font-size: 1.1em;
          padding: 8px 15px;
          margin-bottom: 10px;
          @media (max-width: ${breakpoints.medium}) {
            background-color: ${colors.text};
            padding: 8px 0 6px 0;
            border-bottom: 1px solid ${colors.lightGray};
          }
        `}
      >
        {title}
      </h2>
      {skills.map(skill => (
        <SideBarSkill
          key={skill.title || skill.key}
          title={skill.title}
          description={skill.description}
        />
      ))}
    </div>
  );
}

function SideBarSkill({ title, description }) {
  return (
    <div
      className={css`
        padding: 0 15px;
        margin-bottom: 12px;
        @media (max-width: ${breakpoints.medium}) {
          padding: 0;
        }
      `}
    >
      {title && (
        <h3
          className={css`
            font-size: 1em;
            margin-bottom: 2px;
          `}
        >
          {title}
        </h3>
      )}
      <p className="project-description">{description}</p>
    </div>
  );
}

function MainSection({ title, skills, showBullet }) {
  return (
    <div
      className={css`
        padding-bottom: 10px;
        & a,
        & a:visited {
          display: block;
          color: black;
          font-weight: bold;
          margin-bottom: 4px;
          word-break: break-all;
        }
      `}
    >
      {title && (
        <h2
          className={css`
            font-size: 1.2em;
            margin-bottom: 10px;
          `}
        >
          {title}
        </h2>
      )}
      {skills.map((skill, i) => (
        <MainSkill
          key={skill.title || skill.key}
          title={skill.title}
          description={skill.description}
          link={skill.link}
          showLine={i !== skills.length - 1}
          showBullet={showBullet}
        />
      ))}
    </div>
  );
}

const bulletStyle = css`
  content: "";
  flex-shrink: 0;
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 50%;
  background-color: ${colors.resumePrimary};
  margin-right: 20px;
  z-index: 1;
  @media (max-width: ${breakpoints.small}) {
    margin-top: 2px;
    width: .8rem;
    height: .8rem;
    margin-right: 12px;
  }
`;

const lineStyle = css`
  &::after {
    height: 100%;
    content: "";
    width: 2px;
    top: 1.1rem;
    left: 0.53rem;
    position: absolute;
    border-left: 2px solid ${colors.resumePrimary};
  }

  @media (max-width: ${breakpoints.small}) {
    &::after {
      top: .9rem;
      left: .3rem;
    }
  }
`;

function MainSkill({ title, description, link, showLine, showBullet }) {
  return (
    <div
      className={css`
        margin-bottom: 12px;
        position: relative;
        display: flex;
        & h3 {
          font-size: 1.1em;
          margin-bottom: 4px;
        }
      `}
    >
      {showBullet && (
        <div
          className={css`
            ${bulletStyle}
            ${!showLine ? "" : lineStyle}
          `}
        />
      )}
      <div>
        {title && <h3>{title}</h3>}
        {link && <a href={link}>{link}</a>}
        <p>{description}</p>
      </div>
    </div>
  );
}

function ResumeTitle({ title }) {
  return (
    <h1
      className={css`
        font-size: 1.7em;
        margin-bottom: 5px;
        padding: 15px 0;
      `}
    >
      {title}
    </h1>
  );
}

function Resume() {
  return (
    <Container>
      <Main>
        <ResumeTitle title="Adam Risberg" />
        <MainSection
          skills={[{ description: resume.description, key: "main-desc" }]}
        />
        {resume.mainSections.map(section => (
          <MainSection
            key={section.title}
            title={section.title}
            skills={section.skills}
            showBullet
          />
        ))}
      </Main>
      <SideBar>
        {resume.sideBarSections.map(section => (
          <SideBarSection
            key={section.title}
            title={section.title}
            skills={section.skills}
          />
        ))}
      </SideBar>
    </Container>
  );
}

export default Resume;
