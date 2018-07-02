import React from 'react'

class Content extends React.Component {
  render() {
    const content = this.props.content
    const title = this.props.title

    return (
      <div id={"content-" + title} className="content-block">
        <h4>{title}</h4>
        <hr className="content-block-line" />
        <p>
          {content}
        </p>
      </div>
    )
  }
}

export default Content
