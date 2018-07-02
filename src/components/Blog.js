import React from 'react'
import NavBar from './NavBar'
import Content from './Content'
import Sidebar from './Sidebar'


class Blog extends React.Component {

    render() {
        const blog = "Blog!"

        return (
            <div className="main-page">
                <NavBar />
                <div className="main-content">
                    <Content title="Blog" content={blog} />
                    <Sidebar title="Choose a date" />
                </div>
                <div className="footer"></div>
            </div>
        )
    }
}

export default Blog
