import React from 'react'
import NavBar from './NavBar'
import Content from './Content'


class Interests extends React.Component {

    render() {
        const interests = "I enjoy most things!"

        return (
            <div className="matthew-sweett-porfolio">
                <NavBar />
                <div className="main-content">
                    <Content title="Interests" content={interests} />
                </div>
                <div className="footer"></div>
            </div>
        )
    }
}

export default Interests
