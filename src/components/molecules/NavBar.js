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
            backgroundColor: "#035B96"
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
  font-size: 12px;
  text-transform: uppercase;
  width: 100%;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: #bce4ff;
  }
`;
