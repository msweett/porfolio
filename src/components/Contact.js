import React from 'react'
import NavBar from './NavBar'
import Content from './Content'


class Contact extends React.Component {

    render() {
        const contact = "All of my contact information should be here!"

        return (
            <div className="matthew-sweett-porfolio">
                <NavBar />
                <div className="main-content">
                    <Content title="Contact" content={contact} />
                </div>
                <div className="footer"></div>
            </div>
        )
    }
}

export default Contact
