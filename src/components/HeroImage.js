import React from "react";
import { css } from "emotion";

import { breakpoints } from "../data";
import { handleLinkClick } from "../utils";

function HeroImage({ image, sectionRefs }) {
  const [loaded, setLoaded] = React.useState(false);
  const firstRun = React.useRef(true);

  if (firstRun.current) {
    firstRun.current = false;
    const loadingImage = new Image();
    loadingImage.onload = () => {
      setLoaded(true);
    };
    loadingImage.src = image;
  }

  return (
    <div
      className={css`
        background-position: center;
        background-size: cover;
        position: relative;
        height: calc(100vh - 45px);
        min-height: 255px;
        flex-grow: 1;
        border-bottom: 2px solid #27333f;
        border-top: 2px solid #27333f;
        opacity: ${loaded ? "1" : "0"};
        transition: opacity 1s;
        background-image: url(${image});

        @media (max-width: ${breakpoints.medium}) {
          background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0)
            ),
            url(${image});
        }
      `}
    >
      <div
        className={css`
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          height: 100%;
        `}
      >
        <div
          className={css`
            width: 100%;
          `}
        >
          <h1
            className={css`
              font-weight: 400;
              letter-spacing: 0.5rem;
              margin-bottom: 1rem;
              font-size: 3rem;
              line-height: 3rem;
              text-shadow: 0px 0px 8px black;
              @media (max-width: ${breakpoints.medium}) {
                font-size: 2.4rem;
                line-height: 2.4rem;
              }
              @media (max-width: ${breakpoints.small}) {
                font-size: 2rem;
                line-height: 2rem;
                letter-spacing: 0.1rem;
              }
            `}
          >
            ADAM RISBERG
          </h1>
          <h2
            className={css`
              font-weight: 400;
              letter-spacing: 0.2rem;
              font-size: 2rem;
              line-height: 2rem;
              text-shadow: 0px 0px 8px black;
              @media (max-width: ${breakpoints.medium}) {
                font-size: 1.6rem;
                line-height: 1.6rem;
              }
              @media (max-width: ${breakpoints.small}) {
                font-size: 1.2rem;
                line-height: 1.2rem;
                letter-spacing: 0.1rem;
              }
            `}
          >
            Fullstack Web Developer
          </h2>
          <a
            onClick={handleLinkClick(sectionRefs.projects)}
            href="#projects"
            className={css`
              display: inline-block;
              border: 2px solid rgba(181, 210, 234, 0.2);
              background-color: rgba(39, 51, 63, 0.5);
              color: #eee;
              padding: 8px 16px;
              font-weight: 500;
              margin-top: 20px;
              cursor: pointer;
              transition: background-color 0.2s;
              &:hover {
                background-color: rgba(181, 210, 234, 0.25);
                color: #fff;
              }
              @media (max-width: ${breakpoints.medium}) {
                padding: 6px 16px;
              }
            `}
          >
            VIEW PORTFOLIO
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
