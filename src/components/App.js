import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Content from './Content'


class App extends React.Component {

  render() {
    const aboutMe = "Hi, my name is Matthew Sweett. I am 27 years old and am currently working as a QA specialist at GetChalk!"
    const experience = "I have some skills!"
    const interests = "I enjoy most things!"
    const contact = "All of my contact information should be here!"

    return (
      <div className="matthew-sweett-porfolio">
        <NavBar />
        <div class="main-content">
          <Content title="About me" content={aboutMe} />
          <Content title="Experience" content={experience} />
          <Content title="Interests" content={interests} />
          <Content title="Contact" content={contact} />
        </div>
        <div class="footer">Footer!</div>
      </div>
    )
  }
}

export default App
