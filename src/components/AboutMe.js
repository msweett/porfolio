import React from 'react'
import NavBar from './NavBar'
import Content from './Content'


class App extends React.Component {

    render() {
        const aboutMe = "Hi, my name is Matthew Sweett. I am 27 years old and am currently working as a QA specialist at GetChalk!"

        return (
            <div className="matthew-sweett-porfolio">
                <NavBar />
                <div class="main-content">
                    <Content title="About me" content={aboutMe} />
                </div>
                <div class="footer"></div>
            </div>
        )
    }
}

export default App
