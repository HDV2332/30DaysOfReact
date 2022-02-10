import React, { Component } from 'react'
import CountriesPage from './components/CountriesPage'
import CatPage from './components/CatPage'

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <CatPage />
        {/* <CountriesPage /> */}
      </div>
    )
  }
}

export default App