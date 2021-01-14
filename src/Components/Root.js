import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import PostsList from "./Pages/Blog/PostsList";
import Post from "./Pages/Blog/Post";
import NotFound404 from "./Pages/NotFound404"
import Footer from "./Footer/Footer";

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
          <Route component={Portfolio} exact path="/portfolio" />
          <Route component={Education} exact path="/education" />
          <Route component={Experience} exact path="/experience" />
          <Route component={Contact} exact path="/contact" />
          <Route component={PostsList} exact path="/posts" />
          <Route component={Post} path="/post/:id" />
          <Route component={NotFound404} exact path="/404" />
          <Route component={NotFound404} />
        </Switch>
        <div style={{ height: "100px" }} />
        <Footer />
      </HashRouter>
    </div>
  );
};

export default Root;
