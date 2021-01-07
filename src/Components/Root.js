import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";

const Root = () => {
  return (
    <div>
      <HashRouter>
        <NavBar />
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
