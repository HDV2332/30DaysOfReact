import React, { Component } from 'react'
import ButtonApp from './components/ButtonApp';
import InputApp from './components/InputApp';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ButtonApp/>
        <InputApp/>
      </div>
    )
  }
}

export default App;
