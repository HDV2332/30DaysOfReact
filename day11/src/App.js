import React from "react";
import { divStyles } from './styles/div-styles'

let height = window.innerHeight
let width = window.innerWidth

class App extends React.Component {
  state = {
    mouseIsIn: 0,
    divStyles: divStyles
  }
  handleMouseIn = () => {
    let moveMainDiv = this.state.divStyles
    let newHeight = Math.floor(Math.random() * (height - 60))
    let newWidth = Math.floor(Math.random() * (width - 220))
    if (this.state.mouseIsIn === 0) {
      moveMainDiv = {
        ...divStyles,
        position: 'absolute',
        left: `${newWidth}px`,
        top: `${newHeight}px`,
      }
    } else {
      moveMainDiv = divStyles
    }
    this.setState({
      mouseIsIn: this.state.mouseIsIn + 1,
      divStyles: moveMainDiv
    }
      , () => {
        console.log(this.state.mouseIsIn, newWidth, newHeight);
      })
  }
  handleMouseOut = () => {
    this.setState({
      mouseIsIn: this.state.mouseIsIn - 1
    }
      , () => {
        console.log(this.state.mouseIsIn + ' mouse is out');
      })
  }
  render() {
    let title = '30 Days Of React'
    const { divStyles } = this.state
    return (
      <div>
        <span
          style={divStyles}
          onMouseEnter={this.handleMouseIn}
          onMouseLeave={this.handleMouseOut}
          className='main-dish'
        >
          {title}
        </span>
      </div>
    )
  }
}

export default App;
