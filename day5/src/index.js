import React from 'react';
import ReactDOM from 'react-dom';
import remyPuke from './images/remyPuke.png'
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.png';
import jsLogo from './images/js_logo.png';
import reactLogo from './images/react_logo.png';

//*Display the images
const headerStyles = {
  textAlign: 'center',
  alignItems: 'center',
  fontFamily: 'Consolas'
}
const Header = ({ message, style }) => {
  return (
    <div style={style}>
      <h3>{message}</h3>
    </div>
  )
}

const Main = ({ array, containerStyles, imgStyles }) => {
  imgStyles = {
    display: 'inline-block',
    width: 150,
    height: 150,
    objectFit: 'contain',
    paddingTop: 0,
    padding: 20
  }
  containerStyles = {
    textAlign: 'center'
  }
  const formatted = array.map((tech) => <img key={tech} src={tech} alt={tech} style={imgStyles} />)
  return (
    <div style={containerStyles}>
      {formatted}
    </div>
  )
}

const App2 = () => {
  const line = 'FrontEnd Technologies'
  const technologies = [cssLogo, htmlLogo, jsLogo, reactLogo]
  return (
    <div>
      <Header message={line} style={headerStyles}></Header>
      <Main array={technologies}></Main>
    </div>
  )
}

//*inputs and a button
const title3Styles = { fontWeight: '300' }
const Title3 = ({ message }) => {
  return (
    <div style={title3Styles}>
      <h1>{message}</h1>
    </div>
  )
}

const descriptionStyles = {
  margin: '20 0 20 0',
  fontSize: 15
}
const Description = ({ message }) => {
  return (
    <div style={descriptionStyles} >
      <p>{message}</p>
    </div >
  )
}

const inputStyles = {
  margin: 5,
  borderRadius: 5,
  border: 'none',
  padding: 10,
}
const InputsRow = ({ array }) => {
  const formattedInputs = array.map((input) => <input key={input} placeholder={input} style={inputStyles} />)
  return (
    <div>
      {formattedInputs}
    </div>
  )
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
const onClickEvent = () => {
  alert('Successful!')
}
const Button = ({ message }) => {
  return (
    <>
      <button style={buttonStyles} onClick={onClickEvent}>{message}</button>
    </>
  )
}

const App3 = () => {
  const title = 'SUBCRIBE'
  const description = 'Đăng kí qua Email để nhận được thông báo về cập nhật mới'
  const inputsArr = ['First Name', 'Last Name', 'Email']
  const buttonTitle = 'Subscribe'
  const app3Styles = {
    alignItems: 'center',
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#9fdbe0',
    fontFamily: 'system-ui',
    borderRadius: 13
  }
  return (
    <div style={app3Styles}>
      <Title3 message={title} />
      <Description message={description} />
      <InputsRow array={inputsArr} />
      <Button message={buttonTitle} />
    </div>
  )
}

//*Random Hexa Colors
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
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Consolas',
  color: 'white',
  margin: '4px auto',
  borderRadius: '7.5px',
  width: '75%',
}

const HexaColor = () => {
  let colorText = randomHexaColor()
  return (
    <div style={{ backgroundColor: colorText, ...blockStyles }}>
      <h2>{colorText}</h2>
    </div>
  )
}

const FormattedBlocks = ({ count }) => {
  let formatted = []
  while (count > 0) {
    formatted.push(<HexaColor key={count} />)
    count--
  }
  return (
    <div>
      {formatted}
    </div>
  )
}

const App4 = () => {
  const numBlocks = prompt('how many blocks of color do you want?')
  return (
    <div>
      <FormattedBlocks count={numBlocks} />
    </div>
  )
}

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
const VerifiedUser = ({ userName }) => (
  <div style={verifiedUserStyles}>
    <div style={nameStyles}>{userName}</div>
    <div >&#10003;</div>
  </div>
)

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
const DisplayAvatar = ({ image }) => (
  <img src={image} style={imagesStyles} alt={image} />
)
const UserInfos = ({ image, userName, userPosition, userWhereAbouts }) => {
  return (
    <div style={userInfoContainerStyles}>
      <DisplayAvatar image={image} />
      <VerifiedUser userName={userName} />
      <div>{userPosition}, {userWhereAbouts}</div>
    </div>
  )
}

const h4Styles = {
  marginTop: 20,
  marginBottom: 10
}
const skillStyles = {
  width: 'fit-content',
  backgroundColor: '#6abdcc',
  color: 'white',
  fontSize: 20,
  margin: '7.5px 7.5px 15px 5px',
  padding: 10,
  borderRadius: 7.5,
  float: 'left',
}
const SkillsRow = ({ skills, description }) => {
  const skillsFormatted = skills.map((skill) => <div key={skill} style={skillStyles}>{skill}</div>)
  return (
    <div>
      <h4 style={h4Styles}>{description}</h4>
      {skillsFormatted}
    </div>
  )
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


const app5Styles = {
  padding: 10,
  alignItems: 'left',
  fontFamily: 'Consolas',
  borderRadius: 10,
  margin: 10,
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
}
const app5WrapperStyles = {
  backgroundColor: 'lightgrey',
  padding: 10
}
const App5 = () => {
  const userName = prompt('whats your name?')
  const userPosition = prompt('whats your position on the job?')
  const userWhereAbouts = prompt('where do you live?')
  const avatar = remyPuke
  const dc = 'SKILLS'
  const skills = [
    'HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux',
    'Node', 'MongoDB', 'Flask', 'Django', 'Numpy',
    'Pandas', 'Data Analysis', 'MYSQL', 'GraphQL',
    'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'
  ]
  const date = showDate(new Date())
  return (
    <div style={app5WrapperStyles}>
      <div style={app5Styles}>
        <UserInfos image={avatar} userName={userName} userPosition={userPosition} userWhereAbouts={userWhereAbouts} />
        <SkillsRow description={dc} skills={skills} />
        <JoinedDate date={date} />
      </div>
    </div>
  )
}

const Day5 = () => (
  <>
    <App5 />
    <br />
    <br />
    <br />
    <br />
    <br />
    <App4 />
    <br />
    <br />
    <br />
    <br />
    <br />
    <App3 />
    <br />
    <br />
    <br />
    <br />
    <br />
    <App2 />
  </>
)

ReactDOM.render(<Day5 />, document.getElementById('root'));

//*basics:
// const showDate = (time) => {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ]
//   const month = months[time.getMonth()].slice(0, 3) // trả format tháng 3 chữ
//   const year = time.getFullYear()
//   const date = time.getDate()
//   return ` ${month} ${date}, ${year}`
// }

// // Header Component
// const Header = ({
//   data: {
//     welcome,
//     title,
//     subtitle,
//     author: { firstName, lastName },
//     date,
//   },
// }) => {
//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>
//           {firstName} {lastName}
//         </p>
//         <small>{showDate(date)}</small>
//       </div>
//     </header>
//   )
// }

// // TechList Component
// const TechList = ({ techs }) => {
//   const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
//   return techList
// }

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

// // Main Component
// const Main = ({ user, techs, greetPeople, handleTime }) => (
//   <main>
//     <div className='main-wrapper'>
//       <p>Prerequisite to get started react.js:</p>
//       <ul>
//         <TechList techs={techs} />
//       </ul>
//       <UserCard user={user} />
//       <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
//       <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
//     </div>
//   </main>
// )

// // Footer Component
// const Footer = ({ copyRight }) => (
//   <footer>
//     <div className='footer-wrapper'>
//       <p>Copyright {copyRight.getFullYear()}</p>
//     </div>
//   </footer>
// )

// const App = () => {
//   const data = {
//     welcome: 'Welcome to 30 Days Of React',
//     title: 'Getting Started React',
//     subtitle: 'JavaScript Library',
//     author: {
//       firstName: 'hd',
//       lastName: 'V',
//     },
//     date: new Date(), // date needs to be formatted to a human readable format
//   }
//   const date = new Date()
//   const techs = ['HTML', 'CSS', 'JavaScript']
//   // copying the author from data object to user variable using spread operator
//   const user = { ...data.author, image: remyPuke }

//   const handleTime = () => {
//     alert(showDate(new Date()))
//   }
//   const greetPeople = () => {
//     alert('Welcome to 30 Days Of React Challenge, 2020')
//   }

//   return (
//     <div className='app'>
//       <Header data={data} />
//       <Main
//         user={user}
//         techs={techs}
//         handleTime={handleTime}
//         greetPeople={greetPeople}
//       />
//       <Footer copyRight={date} />
//     </div>
//   )
// }