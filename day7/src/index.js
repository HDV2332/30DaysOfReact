import React from 'react';
import ReactDOM from 'react-dom';
import { tenHighestPopulation } from './data/tenHighestPopulation'
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.png';
import jsLogo from './images/js_logo.png';
import reactLogo from './images/react_logo.png';

//*Display the images
const header1Styles = {
  textAlign: 'center',
  alignItems: 'center',
  fontFamily: 'Consolas'
}
class Header1 extends React.Component {
  render() {
    const { style, message } = this.props
    return (
      <div style={style}>
        <h3>{message}</h3>
      </div>
    )
  }
}
const imgStyles = {
  display: 'inline-block',
  width: 150,
  height: 150,
  objectFit: 'contain',
  paddingTop: 0,
  padding: 20
}
const containerStyles = {
  textAlign: 'center'
}
class Main extends React.Component {
  render() {
    const { array } = this.props
    const formatted = array.map((tech) => <img key={tech} src={tech} alt={tech} style={imgStyles} />)
    return (
      <div style={containerStyles}>
        {formatted}
      </div>
    )
  }
}
class App1 extends React.Component {
  render() {
    const title = 'FrontEnd Technologies'
    const technologies = [cssLogo, htmlLogo, jsLogo, reactLogo]
    return (
      <div>
        <Header1 style={header1Styles} message={title}></Header1>
        <Main array={technologies} />
      </div>
    )
  }
}

//*inputs and a button
const title2Styles = { fontWeight: '300' }
const description1Styles = {
  margin: '20 0 20 0',
  fontSize: 15
}
class Description extends React.Component {
  render() {
    const { message, style } = this.props
    return (
      <div style={style} >
        <p>{message}</p>
      </div >
    )
  }
}

const inputStyles = {
  margin: 5,
  borderRadius: 5,
  border: 'none',
  padding: 10,
}

class InputsRow extends React.Component {
  render() {
    const { array } = this.props
    const formattedInputs = array.map((input) => <input key={input} placeholder={input} style={inputStyles} />)
    return (
      <div>
        {formattedInputs}
      </div>
    )
  }
}

const buttonStyles = {
  backgroundColor: '#e06b63',
  width: '25%',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: 5,
  border: 'none',
  padding: 10,
  margin: 25
}

const Button = ({ message }) => {
  const onClickEvent = () => {
    alert('Successful!')
  }
  return (
    <>
      <button style={buttonStyles} onClick={onClickEvent}>{message}</button>
    </>
  )
}

class App2 extends React.Component {
  render() {
    const title = 'SUBSCRIBE'
    const description = 'Đăng kí qua Email để nhận được thông báo về cập nhật mới'
    const inputsArr = ['First Name', 'Last Name', 'Email']
    const buttonTitle = 'Subscribe'
    const app2Styles = {
      alignItems: 'center',
      textAlign: 'center',
      padding: 20,
      backgroundColor: '#9fdbe0',
      fontFamily: 'system-ui',
      borderRadius: 13
    }
    return (
      <div style={app2Styles}>
        <Header1 style={title2Styles} message={title} />
        <Description message={description} style={description1Styles} />
        <InputsRow array={inputsArr} />
        <Button message={buttonTitle} />
      </div>
    )
  }
}

//*Number Generator 
const header3Styles = {
  textAlign: 'center',
  alignItems: 'center',
  fontSize: 30,
  fontWeight: 'bold',
  padding: 2.5
}
const description2Styles = {
  textAlign: 'center',
  alignItems: 'center',
  fontSize: 20,
  fontWeight: 'light',
  padding: 5,
}

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
// console.log(checkPrime(11));

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

class App3 extends React.Component {
  render() {
    const title = '30 Days of React'
    const description = 'Number Generator'
    const num = 10
    const app3Styles = {
      padding: '0px 50px 50px 50px',
      marginBottom: 50,
      fontFamily: 'System-ui',
    }
    return (
      <div style={app3Styles}>
        <Header1 style={header3Styles} message={title} />
        <Description style={description2Styles} message={description} />
        <Body number={num} />
      </div>
    )
  }
}

//* Hexa Board
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
class HexaColor extends React.Component {
  render() {
    let colorText = randomHexaColor()
    return (
      <div style={{ backgroundColor: colorText, ...blockStyles }}>
        <h2>{colorText}</h2>
      </div>
    )
  }
}

class FormattedBlocks extends React.Component {
  render() {
    let { count } = this.props
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
}

class App4 extends React.Component {
  render() {
    let num = 16
    const title = '30 Days Of React'
    const description = 'Hexadecimal Colors'
    const containerStyles = {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Consolas',
    }
    return (
      <div style={containerStyles}>
        <Header1 style={header3Styles} message={title} />
        <Description style={description2Styles} message={description} />
        <FormattedBlocks count={num} />
      </div>
    )
  }
}

//*Population Bar
class Countries extends React.Component {
  render() {
    let { name } = this.props.country
    return (
      <div>
        <p>{name}</p>
      </div>
    )
  }
}
class PopulationNum extends React.Component {
  render() {
    let { population } = this.props.country
    return (
      <div>
        <p>{population}</p>
      </div>
    )
  }
}

class PopulationBar extends React.Component {
  render() {
    let { population } = this.props.country
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
}

const body2Styles = {
  display: 'table-cell',
  flexDirection: 'column',
  margin: 5
}
const numBarStyles = {
  width: '40%',
  display: 'table-cell',
  flexDirection: 'column',
  margin: 5
}
const body2ContainerStyles = {
  alignItems: 'center',
  textAlign: 'center',
  display: 'table',
  width: '100%',
  fontWeight: 'bold'
}

class Body2 extends React.Component {
  render() {
    let { countries } = this.props
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
      <div style={body2ContainerStyles}>
        <div style={body2Styles}>
          {countriesNameList}
        </div>
        <div style={numBarStyles}>
          {countriesPopulationBarList}
        </div>
        <div style={body2Styles}>
          {countriesPopulationList}
        </div>
      </div>
    )
  }
}

class App5 extends React.Component {
  render() {
    const title = '30 Days Of React'
    const description = 'World Population'
    const data = tenHighestPopulation
    const app5Styles = {
      fontFamily: 'Consolas',
      fontSize: 20,
    }
    return (
      <div style={app5Styles}>
        <Header1 style={header3Styles} message={title} />
        <Description style={description2Styles} message={description} />
        <Body2 countries={data} />
      </div>
    )
  }
}

const Day7 =()=>(
  <>
    <App4/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <App5/>
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
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <App1/>
  </>
)

ReactDOM.render(<Day7 />, document.getElementById('root'));

// //*basics: 
// // User Card Component
// const UserCard = ({ user: { firstName, lastName, image } }) => (
//   <div className='user-card'>
//     <img src={image} alt={firstName} />
//     <h2>
//       {firstName}
//       {lastName}
//     </h2>
//   </div>
// )

// // A button component
// const Button = ({ text, onClick, style }) => (
//   <button style={style} onClick={onClick}>
//     {text}
//   </button>
// )

// // CSS styles in JavaScript Object
// const buttonStyles = {
//   backgroundColor: '#61dbfb',
//   padding: 10,
//   border: 'none',
//   borderRadius: 5,
//   margin: 3,
//   cursor: 'pointer',
//   fontSize: 18,
//   color: 'white',
// }

// // class based component
// class Header extends React.Component {
//   constructor(props) {
//     super(props)
//     // the code inside the constructor run before any other code
//   }
//   render() {
//     console.log(this.props.data)
//     const {
//       welcome,
//       title,
//       subtitle,
//       author: { firstName, lastName },
//       date,
//     } = this.props.data

//     return (
//       <header>
//         <div className='header-wrapper'>
//           <h1>{welcome}</h1>
//           <h2>{title}</h2>
//           <h3>{subtitle}</h3>
//           <p>
//             {firstName} {lastName}
//           </p>
//           <small>{date}</small>
//         </div>
//       </header>
//     )
//   }
// }

// // TechList Component
// // class base component
// class TechList extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     const { techs } = this.props
//     const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
//     return techsFormatted
//   }
// }

// // Main Component
// // Class Component
// class Main extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <main>
//         <div className='main-wrapper'>
//           <p>Prerequisite to get started react.js:</p>
//           <ul>
//             <TechList techs={this.props.techs} />
//           </ul>
//           <UserCard user={this.props.user} />
//           <Button
//             text='Greet People'
//             onClick={this.props.greetPeople}
//             style={buttonStyles}
//           />
//           <Button
//             text='Show Time'
//             onClick={this.props.handleTime}
//             style={buttonStyles}
//           />
//         </div>
//       </main>
//     )
//   }
// }
// // Footer Component
// // Class component
// class Footer extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <footer>
//         <div className='footer-wrapper'>
//           <p>Copyright {this.props.date.getFullYear()}</p>
//         </div>
//       </footer>
//     )
//   }
// }

// class App extends React.Component {
//   showDate = (time) => {
//     const months = [
//       'January',
//       'February',
//       'March',
//       'April',
//       'May',
//       'June',
//       'July',
//       'August',
//       'September',
//       'October',
//       'November',
//       'December',
//     ]

//     const month = months[time.getMonth()].slice(0, 3)
//     const year = time.getFullYear()
//     const date = time.getDate()
//     return ` ${month} ${date}, ${year}`
//   }
//   handleTime = () => {
//     alert(this.showDate(new Date()))
//   }
//   greetPeople = () => {
//     alert('Welcome to 30 Days Of React Challenge, 2020')
//   }
//   render() {
//     const data = {
//       welcome: 'Welcome to 30 Days Of React',
//       title: 'Getting Started React',
//       subtitle: 'JavaScript Library',
//       author: {
//         firstName: 'hd',
//         lastName: 'V',
//       },
//       date: 'Jan 19, 2022',
//     }
//     const techs = ['HTML', 'CSS', 'JavaScript']

//     // copying the author from data object to user variable using spread operator
//     const user = { ...data.author, image: remyPuke }

//     return (
//       <div className='app'>
//         <Header data={data} />
//         <Main
//           user={user}
//           techs={techs}
//           handleTime={this.handleTime}
//           greetPeople={this.greetPeople}
//         />

//         <Footer date={new Date()} />
//       </div>
//     )
//   }
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

