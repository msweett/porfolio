import React from 'react'

class NavItem extends React.Component {
  render() {
    const name = this.props.name
    const route = this.props.route
    return (
      <a class="nav-item-link" href={route}>
        {name}
      </a>
    )
  }
}

export default NavItem
