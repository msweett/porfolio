import React from 'react'
import SidebarNavItem from './NavItem'
import Header from './Header'

class NavBar extends React.Component {
  render() {
    return (
      <div id="navbar">
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
        <span class="site-name">Matthew Sweett's Portfolio</span>
      </div>
    )
  }
}

export default NavBar
