import React from 'react'

class Content extends React.Component {
  render() {
    const name = this.props.contentName
    const title = this.props.title

    return (
      <div class="content-block" className={name}>
        <h4>{title}</h4>
        <hr class="content-block-line" />
        <p>
          {this.props.content}
        </p>
      </div>
    )
  }
}

export default Content
