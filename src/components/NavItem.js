import React from 'react'

class NavItem extends React.Component {
  render() {
    const name = this.props.navName
    return (
      <span>
        <a href={"#content-" + name}>
          <div class="nav-item" >

            {name}

          </div>
        </a>
      </span>
    )
  }
}

export default NavItem
