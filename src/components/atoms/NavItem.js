import React from "react";
import styled from "styled-components";

class NavItem extends React.Component {
  state = {
    isSelected: null
  };

  render() {
    const name = this.props.name;
    const route = this.props.route;

    return (
      <a
        style={{ color: this.state.isSelected ? "blue" : "red" }}
        className="nav-item-link"
        href={route}
        onClick={() => this.props.selectedCB(route.substr(1))}
      >
        {name}
      </a>
    );
  }
}

export default NavItem;
