import * as serviceWorker from "./serviceWorker";
import "es6-promise/auto";
import "es6-object-assign/auto";
import smoothscroll from "smoothscroll-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "emotion";

import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

import { breakpoints, colors } from "./theme";

smoothscroll.polyfill();

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-family: Saira, sans-serif;
  }

  body {
    box-sizing: border-box;
    background-color: ${colors.background};
    color: ${colors.text};
  }

  input,
  textarea,
  button {
    font-size: inherit;
    font-family: inherit;
  }

  a,
  a:visited {
    color: inherit;
    text-decoration: none;
    color: ${colors.text};
    transition: color 0.2s;
  }

  a:hover {
    color: ${colors.secondary};
  }

  img {
    display: block;
    width: 100%;
  }

  @media (max-width: ${breakpoints.small}) {
    body {
      text-align: center;
    }
  }
`;

function App() {
  const [ navOpen, setNavOpen ] = React.useState(false);

  const projectSectionRef = React.useRef();
  const aboutSectionRef = React.useRef();
  const contactSectionRef = React.useRef();

  const openNav = () => setNavOpen(true);
  const closeNav = () => setNavOpen(false);

  return (
    <React.Fragment>
      <Header
        showHeroImage
        openNav={openNav}
        showHamburger={!navOpen}
        sectionRefs={{
          projects: projectSectionRef,
          about: aboutSectionRef,
          contact: contactSectionRef
        }}
      />
      <Projects sectionRef={projectSectionRef} />
      <About sectionRef={aboutSectionRef} />
      <Contact sectionRef={contactSectionRef} />
      <Footer />
      <MobileNav
        open={navOpen}
        closeNav={closeNav}
        sectionRefs={{
          projects: projectSectionRef,
          about: aboutSectionRef,
          contact: contactSectionRef
        }}
      />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
