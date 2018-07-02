import React from 'react'
import NavItem from './NavItem'

class NavBar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <span className="nav-items">
          <ul>
            <li>
              <NavItem name="About me" route="/about_me" />
            </li>
            <li>
              <NavItem name="Experience" route="/experience" />
            </li>
            <li>
              <NavItem name="Interests" route="/interests" />
            </li>
            <li>
              <NavItem name="Contact" route="/contact" />
            </li>
          </ul>
        </span>
        <span className="site-name">Matthew Sweett</span>
      </div>
    )
  }
}

export default NavBar
