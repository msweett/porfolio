import React from "react";
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
    const items = pages.map(item => (
      <NavItem key={item}>
        <StyledNavLink
          className="nav-item-link"
          key={item}
          to={`/${item}`}
          activeStyle={{
            color: "#5ab9fc"
          }}
        >
          {item.replace("_", " ")}
        </StyledNavLink>
      </NavItem>
    ));

    return items;
  }

  render() {
    return (
      <Navbar>
        <NavItems>{this.createNavItems()}</NavItems>
      </Navbar>
    );
  }
}

export default NavBar;

const StyledNavLink = styled(NavLink)`
  font-size: 12px;
  font-weight: bold;
  font-family: Verdana;
  text-transform: uppercase;
  width: 100px;
  height: 50px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  align-items: center;
  text-decoration: none;
  color: white;
`;

const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: black;
  top: 0;
  @media (min-width: 500px) {
    /* padding-left: 25px; */
  }
`;

const NavItems = styled.ul`
  list-style: none;
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
