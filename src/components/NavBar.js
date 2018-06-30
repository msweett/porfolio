import React from 'react'
import SidebarNavItem from './NavItem'

class NavBar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <ul>
          <li>
            <SidebarNavItem navName="About me" />
          </li>
          <li>
            <SidebarNavItem navName="Experience" />
          </li>
          <li>
            <SidebarNavItem navName="Interests" />
          </li>
          <li>
            <SidebarNavItem navName="Contact" />
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar
