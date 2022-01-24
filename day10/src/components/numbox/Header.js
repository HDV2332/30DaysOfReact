import React from "react"

const headerStyles = {
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'Consolas',
    fontSize: '20px'
}

export class Header extends React.Component {
    render() {
        const { message } = this.props
        return (
            <div style={headerStyles}>
                <h3>{message}</h3>
            </div>
        )
    }
}