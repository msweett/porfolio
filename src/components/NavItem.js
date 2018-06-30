import React from 'react'

class NavItem extends React.Component {
  render() {
    const name = this.props.navName
    return (
      <span>
        <div className="nav-item" >
          <a className={name}>
            {name}
          </a>
        </div>
      </span>
    )
  }
}

export default NavItem
