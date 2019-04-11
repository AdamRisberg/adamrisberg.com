import React from "react";
import { css } from "emotion";

import { breakpoints, colors, styles } from "../theme";
import { handleLinkClick } from "../utils";

function HeroContent({ children }) {
  return (
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
        {children}
      </div>
    </div>
  );
}

function HeroTitle({ children }) {
  return (
    <h1
      className={css`
        font-weight: 400;
        letter-spacing: 0.5rem;
        margin-bottom: 1rem;
        font-size: 3rem;
        line-height: 3rem;
        text-shadow: 0px 0px 8px black;
        @media (max-width: ${breakpoints.large}) {
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
      {children}
    </h1>
  );
}

function HeroSubtitle({ children }) {
  return (
    <h2
      className={css`
        font-weight: 400;
        letter-spacing: 0.2rem;
        font-size: 2rem;
        line-height: 2rem;
        text-shadow: 0px 0px 8px black;
        @media (max-width: ${breakpoints.large}) {
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
      {children}
    </h2>
  );
}

function HeroButton({ onClick, href, children }) {
  return (
    <a
      onClick={onClick}
      href={href}
      className={css`
        ${styles.buttonPrimary}
        padding: 8px 16px;
        margin-top: 20px;
        @media (max-width: ${breakpoints.large}) {
          padding: 6px 16px;
        }
      `}
    >
      {children}
    </a>
  );
}

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
        border-bottom: 2px solid ${colors.primary};
        border-top: 2px solid ${colors.primary};
        opacity: ${loaded ? "1" : "0"};
        transition: opacity 1s;
        background-image: url(${image});
        @media (max-width: ${breakpoints.large}) {
          background-image: linear-gradient(
              to bottom,
              ${colors.transparent},
              ${colors.darken},
              ${colors.transparent}
            ),
            url(${image});
        }
      `}
    >
      <HeroContent>
        <HeroTitle>ADAM RISBERG</HeroTitle>
        <HeroSubtitle>Full-stack Developer</HeroSubtitle>
        <HeroButton
          onClick={handleLinkClick(sectionRefs.projects)}
          href="#projects"
        >
          VIEW PORTFOLIO
        </HeroButton>
      </HeroContent>
    </div>
  );
}

export default HeroImage;
