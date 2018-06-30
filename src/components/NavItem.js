import React from 'react'

class NavItem extends React.Component {
  render() {
    const name = this.props.navName
    return (
      <a class="nav-item-link" href={"#content-" + name}>
        {name}
      </a>
    )
  }
}

export default NavItem
