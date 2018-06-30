import React from 'react'
import SidebarNavItem from './NavItem'

class NavBar extends React.Component {
  render() {
    return (
      <nav id="navbar">
        <span class="nav-items">
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
        </span>
        <span class="site-name">Matthew Sweett</span>
      </nav>
    )
  }
}

export default NavBar
