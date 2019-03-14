import React from "react";
import NavItem from "../atoms/NavItem";

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
    const pages = ["blog", "about_me", "experience", "interests", "contact"];
    const navItems = pages.map(item => (
      <li key={item}>
        <NavItem
          key={item}
          name={item}
          route={`/${item}`}
          selectedCB={page => this.selectedHandler(page)}
          selected={this.state.selected[item]}
        />
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
        <span className="site-name">Matthew Sweett</span>
      </div>
    );
  }
}

export default NavBar;
