// index.js
import React, { useState } from 'react'
import remyPuke from './images/remyPuke.png'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import showDate from './components/ultilities/showDate'

const App = () => {
  const [count, setCount] = useState(0)
  const [backgroundColor, setBackgroundColor] = useState(true)

  const addOne = () => {
    setCount(count + 1)
  }

  const minusOne = () => {
    setCount(count - 1)
  }
  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  const changeBackground = () => {
    setBackgroundColor(!backgroundColor)
    console.log(backgroundColor);
  }

  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'hd',
      lastName: 'V',
    },
    date: 'Feb 14, 2022',
  }
  const techs = ['HTML', 'CSS', 'JavaScript']

  const user = { ...data.author, image: remyPuke }

  return (
    <div className='app-wrapper'>
      <div className={`${backgroundColor}-theme`}>
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={handleTime}
          greetPeople={greetPeople}
          changeBackground={changeBackground}
          addOne={addOne}
          minusOne={minusOne}
          count={count}
        />
        <Footer date={new Date()} />
      </div>
    </div>
  )
}

export default App
