import React from "react";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <h4>{this.props.title}</h4>
        <ul className="sidebar-list">
          <li onClick={() => this.props.changeContent("Something Else")}>
            July 1st
          </li>
          <li>July 2nd</li>
          <li>July 3rd</li>
          <li>July 4th</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
