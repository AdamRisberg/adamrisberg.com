import React from "react";
import { css } from "emotion";

import MainNav from "./MainNav";
import HeroImage from "./HeroImage";

function Header({ showHeroImage, openNav, showHamburger }) {
  return (
    <header
      className={css`
        margin-bottom: 60px;
      `}
    >
      <MainNav openNav={openNav} showHamburger={showHamburger} />
      {showHeroImage && <HeroImage image="images/ice.jpg" />}
    </header>
  );
}

export default Header;
