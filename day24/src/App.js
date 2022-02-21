import React, { useState, createContext } from 'react'
import useFetch from './components/useFetch'
import Country from './components/Country'
import Content from './components/Content'

export const ThemeContext = createContext()

const App = (props) => {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const url = 'https://restcountries.com/v2/all'
  const data = useFetch(url)

  return (
    <div className='App'>

      <ThemeContext.Provider value={theme}>
        <div style={{ padding: 20 }}>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <Content />
        </div>
      </ThemeContext.Provider>

      <h1>Custom Hooks</h1>
      <h1>Calling API</h1>
      <div>
        <p>There are {data.length} countries in the api</p>
        <div className='countries-wrapper'>
          {data.map((country) => (
            <Country country={country} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
