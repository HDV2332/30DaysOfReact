import React from 'react'
import Header from './Header'
import Description from './Description'

const bodyStyles = {
    width: '100%',
    float: 'left',
    padding: 10,
    margin: 5,
    fontWeight: 'bold',
    alignItems: 'center',
}

const standardBoxStyles = {
    width: '10%',
    color: '#dbdbd9',
    textAlign: 'center',
    fontSize: 20,
    margin: '2px',
    padding: 20,
    float: 'left',
}
const oddBoxStyles = {
    backgroundColor: '#cfba46'
}
const evenBoxStyles = {
    backgroundColor: '#06c951'
}
const primeBoxStyles = {
    backgroundColor: '#f51d1d'
}
const checkPrime = (num) => {
    if (num < 2) {
        if (num === 1) {
            return false
        } else {
            return 0
        }
    }
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return true;
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

class NumberGen extends React.Component {
    render() {
        const title = '30 Days of React'
        const description = 'Number Generator'
        const num = 10
        return (
            <div className='numberGen-app-styles'>
                <Header message={title} />
                <Description message={description} />
                <Body number={num} />
            </div>
        )
    }
}

export default NumberGen
