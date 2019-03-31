import * as serviceWorker from './serviceWorker';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "emotion";

import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import { breakpoints } from "./data";

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
    background-color: #151922;
    color: #eee;
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
    color: #eee;
    transition: color 0.2s;
  }

  a:hover {
    color: rgba(181, 210, 234, 1);
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

class App extends Component {
  state = {
    navOpen: false
  };

  openNav = () => {
    this.setState({ navOpen: true });
  };

  closeNav = () => {
    this.setState({ navOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <Header
          showHeroImage
          openNav={this.openNav}
          showHamburger={!this.state.navOpen}
        />
        <Projects />
        <About />
        <Contact />
        <Footer />
        <MobileNav open={this.state.navOpen} closeNav={this.closeNav} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();