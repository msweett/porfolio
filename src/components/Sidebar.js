import React from "react";

class Sidebar extends React.Component {
  render() {
    return (
      <div class="sidebar">
        <h4>{this.props.title}</h4>
        <ul class="sidebar-list">
          <li>July 1st</li>
          <li>July 2nd</li>
          <li>July 3rd</li>
          <li>July 4th</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
