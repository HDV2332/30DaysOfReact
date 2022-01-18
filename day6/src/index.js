import React from 'react';
import ReactDOM from 'react-dom';
import { tenHighestPopulation } from './data/tenHighestPopulation'

//* Number Generator
const headerStyles = {
  textAlign: 'center',
  alignItems: 'center',
  fontSize: 40,
  fontWeight: 'bold',
  padding: 15
}
const Header = ({ message }) => (
  <div style={headerStyles}>
    {message}
  </div>
)

const descriptionStyles = {
  textAlign: 'center',
  alignItems: 'center',
  fontSize: 20,
  fontWeight: 'light',
  padding: 10,
  marginBottom: 10
}
const Description = ({ message }) => (
  <div style={descriptionStyles}>
    {message}
  </div>
)

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

function checkPrime(num) {
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

const Body = ({ number }) => {
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

const app2Styles = {
  padding: '0px 50px 0px 50px',
  fontFamily: 'System-ui'
}

const App2 = () => {
  const title = '30 Days of React'
  const description = 'Number Generator'
  const num = prompt('how many numbers do you want to display?')
  return (
    <div style={app2Styles} >
      <Header message={title} />
      <Description message={description} />
      <Body number={num} />
    </div>
  )
}

// console.log(checkPrime(1));
// console.log(checkPrime(28));
// console.log(checkPrime(29));
// console.log(checkPrime(30));
// console.log(checkPrime(31));


//* Hexa board
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

const HexaColor = () => {
  let colorText = randomHexaColor()
  return (
    <div style={{ backgroundColor: colorText, ...blockStyles }}>
      <h2>{colorText}</h2>
    </div>
  )
}

const containerStyles = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'Consolas',
}

const FormattedBlocks = ({ count }) => {
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

const App3 = () => {
  const numBlocks = prompt('how many blocks of color do you want to display?')
  const title = '30 Days Of React'
  const description = 'Hexadecimal Colors'
  return (
    <div style={containerStyles}>
      <Header message={title} />
      <Description message={description} />
      <FormattedBlocks count={numBlocks} />
    </div>
  )
}

//* Population Group Bar
const Countries = ({ country: { name } }) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

// const percentage = (1377422166/7693165599).toFixed*100
// console.log(typeof(percentage));

const PopulationBar = ({ country: { population } }) => {
  let percentage = (population / 7693165599) * 100
  const poppulationBarStyles = {
    width: `${percentage}%`,
    backgroundColor: 'orange',
  }
  const hideTextStyles = {
    visibility: 'hidden'
  }
  return (
    <div >
      <p style={poppulationBarStyles}>
        <span style={hideTextStyles}>{percentage}</span>
      </p>
    </div>
  )
}
const PopulationNum = ({ country: { population } }) => {
  return (
    <div>
      <p>{population}</p>
    </div>
  )
}

const body4Styles = {
  // float: 'left',
  display: 'table-cell',
  flexDirection: 'column',
  margin: 5
}
const numBarStyles = {
  width: '40%',
  // float: 'left',
  display: 'table-cell',
  flexDirection: 'column',
  margin: 5
}
const body4ContainerStyles = {
  alignItems: 'center',
  textAlign: 'center',
  display: 'table',
  width: '100%',
  fontWeight: 'bold'
}
const Body4 = ({ countries }) => {
  const countriesNameList = countries.map((country) => (
    < Countries key={country.name} country={country} />
  ))
  const countriesPopulationBarList = countries.map((country) => (
    < PopulationBar key={country.name} country={country} />
  ))
  const countriesPopulationList = countries.map((country) => (
    < PopulationNum key={country.name} country={country} />
  ))
  return (
    <div style={body4ContainerStyles}>
      <div style={body4Styles}>
        {countriesNameList}
      </div>
      <div style={numBarStyles}>
        {countriesPopulationBarList}
      </div>
      <div style={body4Styles}>
        {countriesPopulationList}
      </div>
    </div>
  )
}

const app4Styles = {
  fontFamily: 'Consolas',
  fontSize: 20,
}

const App4 = () => {
  const title = '30 Days Of React'
  const description = 'World Population'
  const data = tenHighestPopulation
  console.log(data);
  return (
    <div style={app4Styles}>
      <Header message={title} />
      <Description message={description} />
      <Body4 countries={data} />
    </div>
  )
}

const Day6 = () => (
  <>
    <App4/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <App3/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <App2/>
  </>
)

ReactDOM.render(<Day6 />, document.getElementById('root'));


//* basics:
// const countries = [
//   { name: 'Finland', city: 'Helsinki' },
//   { name: 'Sweden', city: 'Stockholm' },
//   { name: 'Denmark', city: 'Copenhagen' },
//   { name: 'Norway', city: 'Oslo' },
//   { name: 'Iceland', city: 'Reykjavík' },
// ]
// // Country component
// const Country = ({ country: { name, city } }) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <small>{city}</small>
//     </div>
//   )
// }
// // countries component
// const Countries = ({ countries }) => {
//   const countryList = countries.map((country) => <Country country={country} />)
//   return <div>{countryList}</div>
// }
// // App component
// const App = () => (
//   <div className='container'>
//     <div>
//       <h1>Countries List</h1>
//       <Countries countries={countries} />
//     </div>
//   </div>
// )