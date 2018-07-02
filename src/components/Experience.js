import React from 'react'
import NavBar from './NavBar'
import Content from './Content'


class App extends React.Component {

    render() {
        const experience = "I have some skills!"

        return (
            <div className="matthew-sweett-porfolio">
                <NavBar />
                <div class="main-content">
                    <Content title="Experience" content={experience} />
                </div>
                <div class="footer"></div>
            </div>
        )
    }
}

export default App
