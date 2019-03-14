import React from "react";
import NavBar from "./molecules/NavBar";
import Content from "./molecules/Content";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Interests from "./pages/Interests";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Main from "./main";

class App extends React.Component {
  render() {
    const home = "This is the home page!";

    return (
      <div className="main-page">
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
