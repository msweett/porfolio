import React from "react";
import styled from "styled-components";

const Header = props => (
  <StyledHeader id="header" className="top">
    <h1>{props.heading}</h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </StyledHeader>
);

export default Header;

const StyledHeader = styled.header`
  font: Verdana;
`;
