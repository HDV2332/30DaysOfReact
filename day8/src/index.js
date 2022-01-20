import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import remyPuke from './images/remyPuke.png'
import { countriesData } from './data/countries.js';

//* user card
const verifiedUserStyles = {
  display: 'flex',
  flexDirection: 'row',
  float: 'left',
  fontWeight: 'bold',
  margin: '15px 0px 15px 0px',
  alignItems: 'center',
}
const nameStyles = {
  fontSize: 25,
  marginRight: 15,
  float: 'left'
}

class VerifiedUser extends React.Component {
  render() {
    const { userName } = this.props
    return (
      <div style={verifiedUserStyles}>
        <div style={nameStyles}>{userName}</div>
        <div >&#10003;</div>
      </div>
    )
  }
}

const userInfoContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  fontWeight: 'light'
}
const imagesStyles = {
  borderRadius: '50%',
  width: 200,
  height: 200
}

class DisplayAvatar extends React.Component {
  render() {
    const { image } = this.props
    return (
      <img src={image} style={imagesStyles} alt={image} />
    )
  }
}

class UserInfos extends React.Component {
  render() {
    const { image, userName, userPosition, userWhereAbouts } = this.props
    return (
      <div style={userInfoContainerStyles}>
        <DisplayAvatar image={image} />
        <VerifiedUser userName={userName} />
        <div>{userPosition}, {userWhereAbouts}</div>
      </div>
    )
  }
}

const h4Styles = {
  marginTop: 20,
  marginBottom: 10
}
const skill1Styles = {
  width: 'fit-content',
  backgroundColor: '#6abdcc',
  color: 'white',
  fontSize: 20,
  margin: '7.5px 7.5px 15px 5px',
  padding: 10,
  borderRadius: 7.5,
  float: 'left',
}
const skill1StylesDarkTheme = {
  backgroundColor: 'white',
  color: 'black'
}
class SkillsRow extends React.Component {
  render() {
    let { skills, description, indivisualStyles } = this.props
    const skillsFormatted = skills.map((skill) => <div key={skill} style={indivisualStyles}>{skill}</div>)
    return (
      <div>
        <h4 style={h4Styles}>{description}</h4>
        {skillsFormatted}
      </div>
    )
  }
}

const Button = ({ text, onClick, style }) => (
  <div>
    <button style={style} onClick={onClick}>
      {text}
    </button>
  </div>
)

const buttonStyles = {
  backgroundColor: '#61dbfb',
  width: '20%',
  padding: 10,
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 15,
  color: 'black',
  fontWeight: 'bold',
  border: '1px solid grey'
}

const dateStyles = {
  fontSize: 13,
  fontWeight: 'light'
}
const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
const JoinedDate = ({ date }) => (
  <div style={dateStyles}>
    <p> &#128340; Joined on {date}</p>
  </div>
)
const app1Styles = {
  padding: 10,
  alignItems: 'left',
  fontFamily: 'Consolas',
  borderRadius: 10,
  margin: 10,
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
}
const app1StylesDarkTheme = {
  backgroundColor: '#2b2a2a',
  color: 'white'
}
const app1WrapperStyles = {
  backgroundColor: 'lightgrey',
  padding: 10
}
const app1WrapperStylesDarkTheme = {
  backgroundColor: '#121111'
}
class App1 extends React.Component {
  state = {
    styleCount: 0,
    appStyles: app1Styles,
    appWrapperStyles: app1WrapperStyles,
    skillStyles: skill1Styles
  }
  changeTheme = () => {
    let currentAppStyles = this.state.appStyles
    let currentAppWrapperStyles = this.state.appWrapperStyles
    let currentSkillStyles = this.state.skillStyles
    if (this.state.styleCount % 2 === 0) {
      currentAppStyles = { ...app1Styles, ...app1StylesDarkTheme }
      currentAppWrapperStyles = { ...app1WrapperStyles, ...app1WrapperStylesDarkTheme }
      currentSkillStyles = { ...skill1Styles, ...skill1StylesDarkTheme }
    } else {
      currentAppStyles = app1Styles
      currentAppWrapperStyles = app1WrapperStyles
      currentSkillStyles = skill1Styles
    }
    this.setState({
      appStyles: currentAppStyles,
      appWrapperStyles: currentAppWrapperStyles,
      skillStyles: currentSkillStyles,
      styleCount: this.state.styleCount + 1
    }, () => {
      console.log(this.state.styleCount);
    })
  }
  render() {
    const userName = 'hdv'
    const userPosition = 'intern'
    const userWhereAbouts = 'hanoi'
    const avatar = remyPuke
    const dc = 'SKILLS'
    const btnText = 'change theme'
    const skills = [
      'HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux',
      'Node', 'MongoDB', 'Flask', 'Django', 'Numpy',
      'Pandas', 'Data Analysis', 'MYSQL', 'GraphQL',
      'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'
    ]
    const date = showDate(new Date())
    let appStyles = this.state.appStyles
    let appWrapperStyles = this.state.appWrapperStyles
    let skillStyles = this.state.skillStyles
    return (
      <div style={appWrapperStyles}>
        <div style={appStyles}>
          <UserInfos image={avatar} userName={userName} userPosition={userPosition} userWhereAbouts={userWhereAbouts} />
          <SkillsRow description={dc} skills={skills} indivisualStyles={skillStyles} />
          <JoinedDate date={date} />
          <Button style={buttonStyles} text={btnText} onClick={this.changeTheme}></Button>
        </div>
      </div>
    )
  }
}

//*countries selector
let randomIndex = () => {
  return Math.floor(Math.random() * countriesData.length)
}

class InfoSection extends React.Component {
  render() {
    let { title, value } = this.props
    return (
      <div>
        <strong>{title}: </strong>
        <span>{value}</span>
      </div>
    )
  }
}

class App2 extends React.Component {
  state = {
    indexCountry: 0
  }
  changeCountry = () => {
    let index = randomIndex()
    if (index < countriesData.length) {
      this.setState({ indexCountry: index })
    }
  }
  render() {
    let index = this.state.indexCountry
    let { name, capital, languages, population, flag, currency } = countriesData[index]
    let displayLanguages = languages.join(', ')
    const app2WrapperStyles = {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      fontFamily: 'Montserrat'
    }
    const app2Styles = {
      width: '40%',
      display: 'flex',
      flexDirection: 'column',
      margin: 10,
      boxShadow: '0 20px 45px rgba(0,0,0,.3)',
    }
    const nameStyles = {
      textAlign: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: 20
    }
    const infoWrapperStyles = {
      padding: '20px 10% 10% 10%',
      fontSize: 17,
      float: 'left'
    }
    const button2Styles = {
      color: 'white',
      width: 'fit-content',
      backgroundColor: '#5f9b9c'
    }
    return (
      <div style={app2WrapperStyles}>
        <div style={app2Styles}>
          <svg src={`${flag}`} alt={name} /> {/* api không còn  */}
          <div style={nameStyles}>{name}</div>
          <div style={infoWrapperStyles}>
            <InfoSection title={'Capital'} value={capital} />
            <InfoSection title={'Languages'} value={displayLanguages} />
            <InfoSection title={'Population'} value={population} />
            <InfoSection title={'Currency'} value={currency} />
          </div>
        </div>
        <Button style={{ ...buttonStyles, ...button2Styles }} text={'Next country'} onClick={this.changeCountry}></Button>
      </div>
    )
  }
}

const Day8 =()=> (
  <>
    <App1/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <App2/>
  </>
)

//* basics: https://github.com/Asabeneh/30-Days-Of-React/blob/master/08_Day_States/08_states_boilerplate/src/index.js
ReactDOM.render(<Day8 />, document.getElementById('root'));


