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

  selectedHandler(page) {
    const selected = { ...this.state.selected };

    if (selected[page]) {
      selected[page] = false;
    } else {
      selected[page] = true;
    }

    this.setState({ selected: selected });
  }

  createNavItems() {
    const pages = ["about_me", "experience", "interests", "contact"];
    const navItems = pages.map(item => (
      <li key={item} style={{ "border-bottom-left-radius": "50px" }}>
        <StyledNavLink
          classname="nav-item-link"
          key={item}
          to={`/${item}`}
          activeStyle={{
            color: "white",
            "background-color": "#035B96"
          }}
        >
          {item.replace("_", " ")}
        </StyledNavLink>
      </li>
    ));

    return navItems;
  }

  render() {
    console.log("State:", this.state);
    return (
      <div id="navbar">
        <span className="nav-items">
          <ul>{this.createNavItems()}</ul>
        </span>
        {/* <span className="site-name">Matthew Sweett</span> */}
      </div>
    );
  }
}

export default NavBar;

const StyledNavLink = styled(NavLink)`
  font-size: 12px;
  text-transform: uppercase;
  width: 100%;
  border-left: 2px solid white;
  box-sizing: border-box;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  color: black;
`;
