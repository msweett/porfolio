import React from 'react'
import SidebarNavItem from './NavItem'

class NavBar extends React.Component {
  render() {
    return (
      <div class="navbar">
        <ul>
          <li>
            <SidebarNavItem navName="About me" />
          </li>{' '}
          <li>
            <SidebarNavItem navName="Experience" />
          </li>{' '}
        </ul>{' '}
      </div>
    )
  }
}

export default NavBar
