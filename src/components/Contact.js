import React from 'react'
import NavBar from './NavBar'
import Content from './Content'


class App extends React.Component {

    render() {
        const contact = "All of my contact information should be here!"

        return (
            <div className="matthew-sweett-porfolio">
                <NavBar />
                <div class="main-content">
                    <Content title="Contact" content={contact} />
                </div>
                <div class="footer"></div>
            </div>
        )
    }
}

export default App
