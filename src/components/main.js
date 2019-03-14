import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Interests from "./pages/Interests";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={AboutMe} />
      <Route path="/about_me" component={AboutMe} />
      <Route path="/experience" component={Experience} />
      <Route path="/interests" component={Interests} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default main;
