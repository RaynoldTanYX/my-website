import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";

import Particles from "react-particles-js";

const Root = () => {
  return (
    <div>
      <HashRouter>
        <NavBar />
        <Particles
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
        <div style={{ height: "10vh" }} />
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Portfolio} path="/portfolio" />
          <Route component={Education} exact path="/education" />
          <Route component={Experience} path="/experience" />
          <Route component={Contact} path="/contact" />
          <Route component={Home} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Root;
