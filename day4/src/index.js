import React from 'react';
import ReactDOM from 'react-dom';
import remyPuke from './images/remyPuke.png';
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.png';
import jsLogo from './images/js_logo.png';
import reactLogo from './images/react_logo.png';

const rootElement = document.getElementById('root')

//!Component name must start with an uppercase

//* basics:
// const welcome = 'Welcome to 30 Days Of React'
// const title = 'Getting Started React'
// const subtitle = 'JavaScript Library'
// const author = {
//   firstName: 'hd',
//   lastName: 'V'
// }
// const date = 'Jan 14, 2022'

// const Header = () => (
//   <header>
//     <div className='header-wrapper'>
//       <h1>{welcome}</h1>
//       <h2>{title}</h2>
//       <h3>{subtitle}</h3>
//       <p>
//         Intern: {author.firstName} {author.lastName}
//       </p>
//       <small>{date}</small>
//     </div>
//   </header>
// )

// const yearBorn = 2000
// const currentYear = 2022
// const age = currentYear - yearBorn
// const personAge = (
//   <p>
//     {' '}
//     {author.firstName} {author.lastName} is {age} years old
//   </p>
// )

// const UserCard = () => (
//   <div className='user-card'>
//     <img src={remyPuke} alt='remyPuke' />
//     <h2>hdV</h2>
//   </div>
// )

// const TechList = () => {
//   const techs = ['HTML', 'CSS', 'Javascript']
//   const techFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
//   return techFormatted
// }

// const Main = () => (
//   <main>
//     <div className='main-wrapper'>
//       <div>
//         <p>
//           Prerequisite to get started{' '}
//           <strong>
//             <em>react.js</em>
//           </strong>
//           :
//         </p>
//         <TechList />
//         {personAge}
//       </div>
//       <UserCard />
//     </div>
//   </main>
// )

// const Footer = () => (
//   <footer>
//     <div className='footer-wrapper'>
//       <p>Copyright &copy; 2022</p>
//     </div>
//   </footer>
// )

// const hexaColor = () => {
//   let str = '0123456789abcdef'
//   let color = ''
//   for (let i = 0; i < 6; i++) {
//     let index = Math.floor(Math.random() * str.length)
//     color += str[index]
//   }
//   return '#' + color
// }
// const HexaColor = ()=> <div>{hexaColor()}</div>

// const App = () => (
//   <div className='app'>
//     <Header />
//     <Main />
//     <Footer />
//     <HexaColor/>
//   </div>
// )

//*import and display
const title2Styles = {
  textAlign: 'center',
  alignItems: 'center'
}
const Title2 = () => (
  <div style={title2Styles}>
    <h4>Front End Technologies</h4>
  </div>
)

const Technologies = () => {
  const imagesRosterStyles = {
    textAlign: 'center'
  }
  const imagesStyles = {
    display: 'inline-block',
    width: 150,
    height: 150,
    objectFit: 'contain',
    paddingTop: 0,
    padding: 20
  }
  return (
    <div style={imagesRosterStyles}>
      <img src={htmlLogo} alt="html" style={imagesStyles} />
      <img src={cssLogo} alt="css" style={imagesStyles} />
      <img src={jsLogo} alt="js" style={imagesStyles} />
      <img src={reactLogo} alt="react" style={imagesStyles} />
    </div>
  )
}
const App2 = () => (
  <div>
    <Title2 />
    <Technologies />
  </div>
)

//*inputs and a button
const Title3 = () => (
  <div style={{ fontWeight: '300' }}>
    <h1>SUBSCRIBE</h1>
  </div>
)

const descriptionStyles = {
  margin: '20 0 20 0',
  fontSize: 15
}
const Description = () => (
  <div style={descriptionStyles} >
    <p>Đăng kí qua Email để nhận được thông báo về cập nhật mới</p>
  </div >
)

const inputStyles = {
  margin: 5,
  borderRadius: 5,
  border: 'none',
  padding: 10,
}
const InputsRow = () => (
  <div style={inputStyles}>
    <input style={inputStyles} placeholder="First Name"></input>
    <input style={inputStyles} placeholder="Last Name"></input>
    <input style={inputStyles} placeholder="Email"></input>
  </div>
)

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
const Button = () => (
  <>
    <button style={buttonStyles}>Subscribe</button>
  </>
)
const app3Styles = {
  alignItems: 'center',
  textAlign: 'center',
  padding: 20,
  backgroundColor: '#9fdbe0',
  fontFamily: 'system-ui',
  borderRadius: 13
}
const App3 = () => (
  <div style={app3Styles}>
    <Title3 />
    <Description />
    <InputsRow />
    <Button />
  </div>
)

//*random colors
const randomHexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => {
  const colorText = randomHexaColor()
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
    backgroundColor: colorText
  }
  return (
    <div style={blockStyles}>
      <h2>{colorText}</h2>
    </div>
  )
}
const App4 = () => (
  <div>
    <HexaColor />
    <HexaColor />
    <HexaColor />
    <HexaColor />
    <HexaColor />
  </div>
)

//*user card
const userName = prompt('whats your name?')
const userPosition = prompt('whats your position on the job?')
const userWhereAbouts = prompt('where do you live?')
const skills = [
  'HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux',
  'Node', 'MongoDB', 'Flask', 'Django', 'Numpy',
  'Pandas', 'Data Analysis', 'MYSQL', 'GraphQL',
  'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'
]

const SkillsRow = () => {
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
  const skillsRowStyles = {
    display: 'inline',
    flexDirection: 'inline',
  }
  const skillsFormatted = skills.map((skill) => <div key={skill} style={skillStyles}>{skill}</div>)
  return (
    <div style={skillsRowStyles}>
      <h4 style={{ marginTop: 20, marginBottom: 10 }}>SKILLS</h4>
      {skillsFormatted}
    </div>
  )
}

const JoinedDate = () => (
  <div>Joined Jan 14, 2022</div>
)
const VerifiedUser = () => {
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
  return (
    <div style={verifiedUserStyles}>
      <div style={nameStyles}>{userName}</div>
      <div >tick</div>
    </div>
  )
}

const UserInfo = () => {
  const userInfoContainerStyles = {
    display: 'flex',
    flexDirection: 'column'
  }
  const imagesStyles = {
    borderRadius: '50%',
    width: 200,
    height: 200
  }
  return (
    <div style={userInfoContainerStyles}>
      <img src={remyPuke} style={imagesStyles} alt="remy" />
      <VerifiedUser />
      <div style={{ fontWeight: 'light' }}>{userPosition}, {userWhereAbouts}</div>
      <SkillsRow />
    </div>
  )
}
const App5 = () => {
  const app5Styles = {
    padding: 10,
    alignItems: 'left',
    fontFamily: 'Consolas',
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'white',
  }
  const app5WrapperStyles = {
    backgroundColor: 'lightgrey',
    padding: 10
  }
  return (
    <div style={app5WrapperStyles}>
      <div style={app5Styles}>
        <UserInfo />
        <JoinedDate />
      </div>
    </div>
  )
}

const Day4 = () => (
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

ReactDOM.render(<Day4 />, rootElement);


