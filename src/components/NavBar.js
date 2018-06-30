import React from 'react'
import SidebarNavItem from './NavItem'
import $ from 'jquery'

class NavBar extends React.Component {
  componentDidMount() {
    $(window).scroll(function () {
      var distanceFromTop = $(this).scrollTop();

      if (distanceFromTop >= $('#header').height()) {
        $('#navbar').addClass('fixed');
      } else {
        $('#navbar').removeClass('fixed');
      }
    });
  }

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
