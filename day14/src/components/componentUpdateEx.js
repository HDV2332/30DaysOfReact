import React, { Component } from 'react'

class CompUpdate extends Component {
    constructor(props) {
        super(props)
        console.log('I am  the constructor and  I will be the first to run.')
        this.state = {
            day: 1,
            congratulate: '',
        }
    }

//**The shouldComponentUpdate() built-in life cycle method should return a boolean. 
//* If this method does not return true the application will not update.
//* If the method does not return true the application will never update. 
//* This can be used for instance to block use when it reaches to a certain point(game, subscription) 
//* or may be to block a certain user.

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState)
        console.log(nextState.day)
        if (nextState.day > 31) {
            return false
        } else {
            return true
        }
    }

    doChallenge = () => {
        this.setState({
            day: this.state.day + 1,
        })
    }

/** 
 ** componentDidUpdate method takes two parameters: the prevProps and prevState. 
 ** It is called after the component is updated in the DOM.
*/
    componentDidUpdate(prevProps, prevState) {
        if (prevState.day === 10) {
            this.setState({
                congratulate: 'Congratulations,Challenge has been completed',
            })
        }
        console.log(prevState, prevProps)
    }

    render() {
        return (
            <div className='App'>
                <h1>React Component Life Cycle</h1>
                <h1>Calling API</h1>
                <button onClick={this.doChallenge}>Do Challenge</button>
                <p>Challenge: Day {this.state.day}</p>
                {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
            </div>
        )
    }
}

export default CompUpdate
