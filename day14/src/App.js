import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    this.state = {
      firstName: 'hd',
      lastName: 'Vu',
      data: [],
    }
  }
  
//*getDerivedStateFromProps is the first method that is called when a component gets updated.
  static getDerivedStateFromProps(props, state) {
    console.log(
        'I am getDerivedStateFromProps and I will be the second to run.'
    )
    return { firstName: props.firstName }
}

  componentDidMount() {
    console.log('I am componentDidMount and I will be last to run.')
    const API_URL = 'https://restcountries.com/v2/all'
    fetch(API_URL)
      .then((response) => {
        console.log(this.state.firstName)
        return response.json() 
      })
      .then((data) => {
        console.log(data)
        this.setState({
          data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  renderCountries = () => {
    return this.state.data.map((country) => {
      return (
        <div key={country.name} className='country-wrapper'>
          <div className='country-img-wrapper'>
            <img src={country.flag} alt={country.name} />
          </div>
          <div className='country-infos-wrapper'>
            <h1>{country.name}</h1>
            <p>Population: {country.population}</p>
            <p>Capital: {country.capital}</p>
            <p>Subregion: {country.subregion}</p>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='app-header'>
          <h1>React Component Life Cycle</h1>
          <h2>Calling API</h2>
          <p>There are {this.state.data.length} countries in the api</p>
        </div>
        <div>
          <div className='countries-wrapper'>{this.renderCountries()}</div>
        </div>
      </div>
    )
  }
}

export default App;
