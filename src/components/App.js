import React from 'react'
import NavBar from './NavBar'
import Content from './Content'


class App extends React.Component {

  render() {
    const home = "This is the home page!"

    return (
      <div className="matthew-sweett-porfolio">
        <NavBar />
        <div class="main-content">
          <Content title="home" content={home} />
        </div>
        <div class="footer"></div>
      </div>
    )
  }
}

export default App
