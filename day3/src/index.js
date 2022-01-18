import React from "react";
import reactDom from "react-dom";
import remyPuke from "./images/remyPuke.png"
import react from "./images/react.png"
import js from "./images/js.jpg"
import css from "./images/css.png"
import html from "./images/html5.png"

// const jsxElement = <h1>This is a JSX element</h1>
const rootElement = document.getElementById("root");

//**basics:
// const welcome = 'Welcome to 30 Days Of React'
// const title = 'Getting Started React'
// const subtitle = 'JavaScript Library'
// const author = {
//   firstName: 'hd',
//   lastName: 'V',
// }
// const date = 'Oct 2, 2020'

// const headerStyles = {
//   backgroundColor: '#61DBFB',
//   fontFamily: 'Helvetica Neue',
//   padding: 25,
//   lineHeight: 1.5,
// }

// const header = (
//   <header style={headerStyles}>
//     <div className='header-wrapper'>
//       <h1>{welcome}</h1>
//       <h2>{title}</h2>
//       <h3>{subtitle}</h3>
//       <p>Name: {author.firstName} {author.lastName}</p>
//       <small>Date: {date}</small>
//     </div>
//   </header>
// );

// const yearBorn = 2000
// const currentYear = new Date().getFullYear()
// const age = currentYear - yearBorn
// const personAge = (
//   <p>
//     {' '}
//     {author.firstName} {author.lastName} hiện {age} tuổi.
//   </p>
// )

// const techs = ['HTML', 'CSS', 'JavaScript']
// const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

// const user = (
//   <div>
//     <img src={remyPuke} alt='Remy Puke' />
//   </div>
// )

// const main = (
//   <main>
//     <div className='main-wrapper'>
//       <p>
//         Hãy chuẩn bị kiến thức về các công nghệ này trước khi học{' '}
//         <strong>
//           <em>react.js</em>
//         </strong>
//         :
//       </p>
//       <ul>
//         {techsFormatted}
//       </ul>
//       {personAge}
//       {user}
//     </div>
//   </main>
// );

// const footer = (
//   <div className='footer-wrapper'>
//     <p>Copyright 2022</p>
//   </div>
// )

// const app = (
//   <div className='app'>
//     {header}
//     {main}
//     {footer}
//   </div>
// )

//**level2: import and render the following images

const title2Styles = {
  textAlign: 'center',
  alignItems: 'center'
}
const title2 = (
  <div style={title2Styles}>
    <h4>Front End Technologies</h4>
  </div>
)

const imagesRosterStyles = {
  textAlign: 'center'
}
const imagesStyles ={
  display: 'inline-block',
  width: 150,
  height: 150,
  objectFit: 'contain',
  paddingTop: 0,
  padding: 20
}
const imagesRoster = (
  <div style={imagesRosterStyles}>
    <img src={html} alt="html" style={imagesStyles}/>
    <img src={css} alt="css" style={imagesStyles}/>
    <img src={js} alt="js" style={imagesStyles}/>
    <img src={react} alt="react" style={imagesStyles}/>
  </div>
)

const app1 = (
  <div style={{padding: 0, margin: 0}}>
    {title2}
    {imagesRoster}
  </div>
)


//**subscribe button and inputs
const title = (
  <div style={{ fontWeight: '300' }}>
    <h1>SUBSCRIBE</h1>
  </div>
)
const description = (
  <div style={{margin: '20 0 20 0', fontSize: 17}}>
    <p>Sign up with your email address to receive news and update</p>
  </div>
)

const inputStyles = {
  margin: 5,
  borderRadius: 5,
  border: 'none',
  padding: 10,
}
const inputsRow = (
  <>
    <div>
      <input style={inputStyles} placeholder="First Name"></input>
      <input style={inputStyles} placeholder="Last Name"></input>
      <input style={inputStyles} placeholder="Email"></input>
    </div>
  </>
)

const buttonStyle = {
  backgroundColor: 'red',
  width: '25%',
  color: 'white',
  borderRadius: 5,
  border: 'none',
  padding: 10,
  margin: 25
}
const button = (
  <div>
    <button style={buttonStyle}>Suscribe</button>
  </div>
)

const app2Styles = {
  alignItems: 'center',
  textAlign: 'center',
  padding: 20,
  backgroundColor: '#6abdcc',
  fontFamily: 'system-ui',
  borderRadius: 13
}
const app2 = (
  <div style={app2Styles}>
    {title}
    {description}
    {inputsRow}
    {button}
  </div>
)


//**user card

const skills = [
    'HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux',
    'Node', 'MongoDB', 'Flask', 'Django', 'Numpy',
    'Pandas', 'Data Analysis', 'MYSQL', 'GraphQL',
    'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'
]
const skillStyles = {
    width: 'fit-content',
    backgroundColor: '#6abdcc',
    color: 'white',
    fontSize: 20,
    margin: '7.5px 7.5px 15px 5px',
    padding: 10,
    borderRadius: 7.5,
    float: 'left'
}
const skillsFormatted = skills.map((skill) => <div key={skill} style={skillStyles}>{skill}</div>)
const skillsRowStyles = {
    display: 'inline',
    flexDirection: 'inline',
}
const skillsRow = (
    <div style={skillsRowStyles}>
        <h4 style={{ marginTop: 20, marginBottom: 10 }}>SKILLS</h4>
        {skillsFormatted}
    </div>
)

const verifiedUserStyles = {
    display: 'flex',
    flexDirection: 'row',
    float: 'left',
    fontWeight: 'bold',
    margin: '15px 0px 15px 0px',
    alignItems: 'center'
}
const verifiedUser = (
    <div style={verifiedUserStyles}>
        <div style={{ fontSize: 25, marginRight: 15, float: 'left' }}>HDV</div>
        <div style={{ float: 'left' }}>tick</div>
    </div>
)
const userInfo = (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <img src={remyPuke} style={{ borderRadius: '50%', width: 200, height: 200 }} alt="remy" />
        {verifiedUser}
        <div style={{ fontWeight: 'light' }}>ReactJs Intern, HaNoi</div>
        {skillsRow}
    </div>
)
const app3Styles = {
    padding: 10,
    alignItems: 'left',
    fontFamily: 'Consolas',
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'white'
}

const app3 = (
    <div style={{backgroundColor: 'lightgrey', padding: 10}}>
        <div style={app3Styles}>
            {userInfo}
            <div>Joined on Jan 13, 2022</div>
        </div>
    </div>
)

const exercises = (
    <div>
        {app3}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        {app2}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        {app1}
    </div>
)

reactDom.render(exercises, rootElement)