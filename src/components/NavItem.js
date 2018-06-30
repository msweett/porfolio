import React from 'react'

class NavItem extends React.Component {
  render() {
    const name = this.props.navName
    return (
      <span>
        <div class="nav-item" >
          <a href={"#content-" + name}>
            {name}
          </a>
        </div>
      </span>
    )
  }
}

export default NavItem
