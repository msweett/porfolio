import React from 'react'

class Sidebar extends React.Component {
    render() {
        return (
            <div class="sidebar">
                <h4>{this.props.title}</h4>
                <ul class="sidebar-list">
                    <li >
                        July 1st, 2018
                    </li>
                    <li >
                        July 2nd, 2018
                    </li>
                    <li >
                        July 3rd, 2018
                    </li>
                    <li>
                        July 4th, 2018
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar
