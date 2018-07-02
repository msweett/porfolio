import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Interests from "./Interests";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Blog from "./Blog";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about_me" component={AboutMe} />
      <Route path="/experience" component={Experience} />
      <Route path="/interests" component={Interests} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
