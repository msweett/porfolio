import React from "react";

const Header = props => (
  <header id="header" className="top">
    <h1>
      Matthew Sweett's
    </h1>
    <h3 className="tagline">
      <span class>{props.tagline}</span>
    </h3>
  </header>
);

export default Header;
