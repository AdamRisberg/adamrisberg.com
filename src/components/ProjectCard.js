import React from "react";
import { css } from "emotion";

import { colors } from "../theme";

const contentStyle = css`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: ${colors.background};
  border: 2px solid ${colors.secondaryDarker};
  opacity: 0;
  transition: opacity 0.5s 0.2s;
  cursor: default;
  pointer-events: none;
`;

const buttonStyle = css`
  display: inline-block;
  border: 1px solid ${colors.secondaryTrans};
  background-color: ${colors.primaryDark};
  padding: 2px 12px;
  font-weight: 500;
  font-size: 0.8rem;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${colors.secondaryDarker};
    color: ${colors.white};
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const cardStyle = css`
  font-weight: 400;
  font-size: 0.9rem;
  position: relative;
  overflow: hidden;
  max-width: 420px;
  margin: 0 auto;

  &:hover [data-project-content] {
    opacity: 1;
    pointer-events: auto;
  }

  &:hover [data-project-content] div:nth-of-type(1) {
    transform: translateY(0);
    transition: transform 0.3s 0.5s;
  }
  &:hover [data-project-content] div:nth-of-type(2) {
    transform: translateY(0);
    transition: transform 0.3s 0.4s;
  }
  &:hover [data-project-content] div:nth-of-type(3) {
    transform: translateY(0);
    transition: transform 0.3s 0.3s;
  }
  &:hover [data-project-content] div:nth-of-type(4) {
    transform: translateY(0);
    transition: transform 0.3s 0.5s;
  }
`;

const preTransformStyle = css`
  transform: translateY(-200px);
  transition: transform 0.3s;
`;

function ProjectCard({ title, type, tech, image, links = [] }) {
  return (
    <div className={cardStyle}>
      <img src={image} alt="React Cart" />
      <div className={contentStyle} data-project-content>
        <div
          className={css`
            font-weight: 600;
            font-size: 1rem;
            ${preTransformStyle}
          `}
        >
          {title}
        </div>
        <div className={preTransformStyle}>{type}</div>
        <div className={preTransformStyle}>{tech}</div>
        <div
          className={css`
            transform: translateY(200px);
            transition: transform 0.3s;
          `}
        >
          {links.map(link => (
            <a
              key={`${title}-${link.title}`}
              href={link.href}
              className={buttonStyle}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
