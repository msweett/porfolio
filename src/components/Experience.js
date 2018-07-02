import React from 'react'
import NavBar from './NavBar'
import Content from './Content'


class Experience extends React.Component {

    render() {
        const experience = "I have some skills!"

        return (
            <div className="main-page">
                <NavBar />
                <div className="main-content">
                    <Content title="Experience" content={experience} />
                </div>
                <div className="footer"></div>
            </div>
        )
    }
}

export default Experience
