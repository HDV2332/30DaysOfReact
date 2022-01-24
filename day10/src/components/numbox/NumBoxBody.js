import React from 'react'
import { checkPrime } from '../utils/checkPrime'
import { standardBoxStyles, oddBoxStyles, evenBoxStyles, primeBoxStyles } from '../../styles/num-app-styles/box-styles'

const bodyStyles = {
    width: '100%',
    float: 'left',
    padding: 10,
    margin: 5,
    fontWeight: 'bold',
    alignItems: 'center',
}

class Body extends React.Component {
    render() {
        const { number } = this.props
        const completed = []
        for (let i = 0; i <= number; i++) {
            if (checkPrime(i)) {
                completed.push(<div key={i} style={{ ...standardBoxStyles, ...primeBoxStyles }}>{i}</div>)
            } else {
                if (i % 2 === 0) {
                    completed.push(<div key={i} style={{ ...standardBoxStyles, ...evenBoxStyles }}>{i}</div>)
                } else {
                    completed.push(<div key={i} style={{ ...standardBoxStyles, ...oddBoxStyles }}>{i}</div>)
                }
            }
        }
        return (
            <div style={bodyStyles}>
                {completed}
            </div>
        )
    }
}

export default Body