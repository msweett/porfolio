import React from "react";
import NavItem from "../atoms/NavItem";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

class NavBar extends React.Component {
  state = {
    selected: {
      blog: false,
      about_me: false,
      experience: false,
      interests: false,
      contact: false
    }
  };

  createNavItems() {
    const pages = ["about_me", "experience", "interests", "contact"];
    const navItems = pages.map(item => (
      <li key={item}>
        <StyledNavLink
          className="nav-item-link"
          key={item}
          to={`/${item}`}
          activeStyle={{
            color: "white",
            backgroundColor: "#035B96",
            border: "5px solid #184387",
            "border-bottom": "none",
            "border-top-left-radius": "5px",
            "border-top-right-radius": "5px",
            "box-shadow": "1px 10px 10px black"
          }}
        >
          {item.replace("_", " ")}
        </StyledNavLink>
      </li>
    ));

    return navItems;
  }

  render() {
    return (
      <div id="navbar">
        <span className="nav-items">
          <ul>{this.createNavItems()}</ul>
        </span>
      </div>
    );
  }
}

export default NavBar;

const StyledNavLink = styled(NavLink)`
  font-size: 14px;
  font-weight: bolder;
  font-family: Verdana;
  text-transform: uppercase;
  border-bottom: none;
  border-top: none;
  width: 250px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  display: flex;
  box-shadow: 0px 1px 7px #aeb3ba inset;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  color: black;
  background-color: #f4faff;

  &:hover {
    background-color: #deeef9;
    border: 1px solid #a4c6dd;
    border-bottom: none;
    border-top: none;
  }
`;
