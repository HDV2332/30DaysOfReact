import React from "react"

class Header extends React.Component {
    render() {
        const { userName, date } = this.props
        return (
            <div className="header-styles">
                <h1 className="title-styles">30 Days Of React</h1>
                <h2 className="subtitle-styles">Getting Started React</h2>
                <h3>JavaScript Library</h3>
                <p>Instructor: {userName}</p>
                <small>{date}</small>
            </div>
        )
    }
}

export default Header