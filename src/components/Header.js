import React from "react";
import { css } from "emotion";

import MainNav from "./MainNav";
import HeroImage from "./HeroImage";

function Header({ showHeroImage, openNav, showHamburger, sectionRefs }) {
  return (
    <header
      className={css`
        margin-bottom: 60px;
      `}
    >
      <MainNav
        sectionRefs={sectionRefs}
        openNav={openNav}
        showHamburger={showHamburger}
      />
      {showHeroImage && (
        <HeroImage sectionRefs={sectionRefs} image="images/ice.jpg" />
      )}
    </header>
  );
}

export default Header;
