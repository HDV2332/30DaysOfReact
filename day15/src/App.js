import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'date-fns'
import addBusinessDays from 'date-fns/addBusinessDays'
import { IconSection } from './components/IconsSection'
import Header from './components/Header'
import RandomUser from './components/RandomUser'
import ValidatedForm from './components/ValidatedForm'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    this.state = {
      firstName: 'John',
      data: [],
      day: 1,
      congratulate: '',
    }
  }

  componentDidMount() {
    console.log('The component did mount and this is the last to run');
    const API_URL = 'https://restcountries.com/v2/all'
    axios
      .get(API_URL)
      .then((response) => {
        this.setState({
          data: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  static getDerivedStateFromProps(props, state) {
    return { firstName: props.firstName }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    console.log(nextState.day)
    if (nextState.day > 6) {
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

  renderCountries = () => {
    return this.state.data.map((country) => {
      const languageOrLanguages =
        country.languages.length > 1 ? 'Languages' : 'Language'
      const formatLanguages = country.languages
        .map(({ name }) => name)
        .join(', ')
      return (
        <div key={country.name}>
          <div>
            {' '}
            <img src={country.flag} alt={country.name} />{' '}
          </div>
          <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>
              {languageOrLanguages}: {formatLanguages}
            </p>
            <p>Population: {country.population}</p>
          </div>
        </div>
      )
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.day === 5) {
      this.setState({
        congratulate: 'Congratulations, Challenge has been completed',
      })
    }
    console.log(prevState, prevProps)
  }

  render() {
    const today = new Date()
    const formattedToday = format(today, 'dd-MM-yyyy')
    const finishedDay = addBusinessDays(today, 30)
    const formattedFinishedDay = format(finishedDay, 'dd-MM-yyyy')
    const userName = 'hdV'
    return (
      <div className='App'>
        <Header userName={userName} date={formattedToday} />
        <small>This challenge was started on {formattedToday}</small>
        <br />
        <small>The challenge will be over on {formattedFinishedDay}</small>

        <ValidatedForm/>

        <IconSection />

        <div className='main-titles'>
          <h1>React Component Life Cycle</h1>
          <h1>Calling API</h1>
        </div>

        <button onClick={this.doChallenge}>Do Challenge</button>
        <p>Challenge: Day {this.state.day}</p>
        {this.state.congratulate && <h4>{this.state.congratulate}</h4>}

        <RandomUser />

        <div className='countries-section'>
          <h3>There are {this.state.data.length} countries in the api</h3>
          <div className='countries-wrapper'>
            {this.renderCountries()}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
