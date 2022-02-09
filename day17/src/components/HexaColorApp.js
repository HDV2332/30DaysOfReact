import React from "react"
import Header from './Header'
import Description from './Description'

const randomHexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    return '#' + color
}

const blockStyles = {
    height: '120px',
    width: '120px',
    padding: 20,
    borderRadius: 2.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Consolas',
    color: 'white',
    margin: '2px',
    float: ' left'
}
class HexaColor extends React.Component {
    render() {
        let colorText = randomHexaColor()
        return (
            <div style={{ backgroundColor: colorText, ...blockStyles }}>
                <h2>{colorText}</h2>
            </div>
        )
    }
}

class FormattedBlocks extends React.Component {
    render() {
        let { count } = this.props
        let formatted = []
        while (count > 0) {
            formatted.push(<HexaColor key={count} />)
            count--
        }
        return (
            <div >
                {formatted}
            </div>
        )
    }
}

class HexaColorApp extends React.Component {
    render() {
        let num = 15
        const title = '30 Days Of React'
        const description = 'Hexadecimal Colors'
        const containerStyles = {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'Consolas',
        }
        return (
            <div style={containerStyles}>
                <Header message={title} />
                <Description message={description} />
                <FormattedBlocks count={num} />
            </div>
        )
    }
}

export default HexaColorApp