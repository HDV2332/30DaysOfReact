import React from "react";

const descriptionStyles = {
    margin: '20 0 20 0',
    fontSize: '17px'
}

export class Description extends React.Component {
    render() {
        const { message } = this.props
        return (
            <div style={descriptionStyles} >
                <p className='numbox-description'>{message}</p>
            </div >
        )
    }
}