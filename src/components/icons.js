import React from "react";
import { css } from "emotion";

import { colors } from "../theme";

const svgStyle = css`
  cursor: pointer;
  margin-bottom: -4px;
  &:hover path {
    fill: ${colors.secondary};
  }
`;

const pathStyle = css`
  fill: ${colors.text};
  transition: fill 0.2s;
`;

export function CloseIcon() {
  return (
    <svg
      className={css`
        margin-bottom: -4px;
        & line {
          stroke: ${colors.text};
          stroke-width: 2.5;
          transition: stroke 0.2s;
        }
      `}
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      focusable="false"
    >
      <line x1="0" y1="0" x2="20" y2="20" />
      <line x1="0" y1="20" x2="20" y2="0" />
    </svg>
  );
}

export function HamburgerIcon() {
  return (
    <svg
      className={svgStyle}
      style={{ marginBottom: "-6px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="34px"
      height="34px"
      viewBox="0 0 30 30"
      focusable="false"
    >
      <path
        className={pathStyle}
        d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"
      />
    </svg>
  );
}

export function LinkedInIcon({ width, height }) {
  return (
    <svg
      className={svgStyle}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      focusable="false"
    >
      <path
        className={pathStyle}
        d="M30.7,0H1.3C0.6,0,0,0.6,0,1.3v29.3C0,31.4,0.6,32,1.3,32h29.3c0.7,0,1.3-0.6,1.3-1.3V1.3
        C32,0.6,31.4,0,30.7,0z M9.5,27.3H4.7V12h4.8V27.3z M7.1,9.9c-1.5,0-2.8-1.2-2.8-2.8c0-1.5,1.2-2.8,2.8-2.8c1.5,0,2.8,1.2,2.8,2.8
        C9.9,8.7,8.6,9.9,7.1,9.9z M27.3,27.3h-4.7v-7.4c0-1.8,0-4-2.5-4c-2.5,0-2.8,1.9-2.8,3.9v7.6h-4.7V12H17v2.1h0.1
        c0.6-1.2,2.2-2.5,4.5-2.5c4.8,0,5.7,3.2,5.7,7.3V27.3z"
      />
    </svg>
  );
}

export function GithubIcon({ width, height }) {
  return (
    <svg
      className={svgStyle}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      focusable="false"
    >
      <path
        className={pathStyle}
        d="M16,0.4c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2
    c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1
    c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3
    c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5C23.1,6.6,24.4,7,24.4,7
    c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4
    c0,0.4,0.3,0.9,1.1,0.8C27.4,29.5,32,23.5,32,16.4C32,7.6,24.8,0.4,16,0.4z"
      />
    </svg>
  );
}

export function CodePenIcon({ width, height }) {
  return (
    <svg
      className={svgStyle}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      focusable="false"
    >
      <path
        className={pathStyle}
        d="M32,10.9C32,10.9,32,10.9,32,10.9c0-0.1,0-0.1,0-0.2c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1
    c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1-0.1-0.1c0,0,0,0,0-0.1c0,0,0-0.1-0.1-0.1c0,0,0,0-0.1-0.1c0,0-0.1,0-0.1-0.1
    c0,0,0,0-0.1,0c0,0,0,0,0,0L16.8,0.2c-0.5-0.3-1.1-0.3-1.5,0L0.6,10c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0.1c0,0,0,0-0.1,0.1
    c0,0,0,0-0.1,0.1c0,0,0,0,0,0.1c0,0,0,0.1-0.1,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1
    c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0.1,0,0.1,0,0.2v9.7c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1
    c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0.1,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0.1,0.1c0,0,0,0,0.1,0.1
    c0,0,0.1,0,0.1,0.1c0,0,0,0,0.1,0c0,0,0,0,0,0l14.6,9.8c0.2,0.2,0.5,0.2,0.8,0.2c0.3,0,0.5-0.1,0.8-0.2L31.4,22c0,0,0,0,0,0
    c0,0,0,0,0.1,0c0,0,0.1,0,0.1-0.1c0,0,0,0,0.1-0.1c0,0,0,0,0.1-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0.1-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1
    c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2v-9.7C32,11.1,32,11,32,10.9z
      M17.4,3.9l10.8,7.2l-4.8,3.2l-6-4V3.9z M14.6,3.9v6.4l-6,4l-4.8-3.2L14.6,3.9z M2.8,13.7L6.2,16l-3.4,2.3V13.7z M14.6,28.1
    L3.9,20.9l4.8-3.2l6,4V28.1z M16,19.3L11.1,16l4.9-3.3l4.9,3.3L16,19.3z M17.4,28.1v-6.4l6-4l4.8,3.2L17.4,28.1z M29.2,18.3L25.8,16
    l3.4-2.3V18.3z"
      />
    </svg>
  );
}
