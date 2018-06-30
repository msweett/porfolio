import React from 'react'
import Header from './Header'
import SidebarNavItem from './NavItem'
import NavBar from './NavBar'
import Content from './Content'


class App extends React.Component {


  render() {
    const aboutMe = "Hi, my name is Matthew Sweett. I am 27 years old and am currently working as a QA specialist at GetChalk!"
    const experience = "I have the following skills: "

    return (
      <div className="matthew-sweett-porfolio">
        <Header tagline="Portfolio!" />
        <NavBar />
        <div class="main-content">
          <Content title="About me" content={aboutMe} />
          <Content title="Experience" content={experience} />
        </div>
      </div>
    )
  }
}

export default App
