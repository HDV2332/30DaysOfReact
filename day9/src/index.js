import React from 'react';
import ReactDOM from 'react-dom';
// import remyPuke from './images/remyPuke.png'

//seasons of the year

const buttonStyles = {
  backgroundColor: '#827d7d',
  width: '100px',
  padding: 10,
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 15,
  color: 'white',
  fontWeight: 'bold',
  border: '1px solid grey'
}
const Button = ({ className, text, onClick, style }) => (
  <div>
    <button className={className} style={style} onClick={onClick}>
      {text}
    </button>
  </div>
)

const dateStyles = {
  fontSize: 13,
  fontWeight: 'light',
  color: 'white'
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

const seasonStyles = [
  {
    style: {
      backgroundColor: 'pink',
      padding: 10
    }
  },
  {
    style: {
      backgroundColor: '#e33030',
      padding: 10
    }
  },
  {
    style: {
      backgroundColor: '#a35705',
      padding: 10
    }
  },
  {
    style: {
      backgroundColor: '#50f2d7',
      padding: 10
    }
  }
]

const standardWrapperStyles = {
  padding: 20,
  margin: 20,
  borderRadius: 20,
  fontFamily: 'Montserrat'
}

const extraSeasonWrapperStyles = [
  {
    style: {
      backgroundColor: '#d15e5e',
    }
  },
  {
    style: {
      backgroundColor: '#541010',
    }
  },
  {
    style: {
      backgroundColor: '#8a6433',
    }
  },
  {
    style: {
      backgroundColor: '#165357',
    }
  }
]
class App1 extends React.Component {
  state = {
    seasons: [
      'Spring',
      'Summer',
      'Autumn',
      'Winter'
    ],
    activeSeason: 0,
    wrapperStyles: seasonStyles[0].style,
    extraWrapperStyles: { ...standardWrapperStyles, ...extraSeasonWrapperStyles[0].style }
  }
  render() {
    const { seasons, activeSeason, wrapperStyles, extraWrapperStyles } = this.state
    console.log(seasons);
    const title = 'Season Color Changer'
    const date = showDate(new Date())
    const titleWrapper = {
      textAlign: 'center',
      padding: 10,
      fontSize: 20,
      color: 'white'
    }
    const buttonWrapper = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 20
    }
    return (
      <div style={wrapperStyles}>
        <div style={extraWrapperStyles}>
          <div style={titleWrapper}>
            <strong>{title}</strong>
          </div>
          <div style={buttonWrapper}>
            {seasons.map((season, i) => (
              <Button
                text={seasons[i]}
                className={i === activeSeason ? 'active' : ''}
                onClick={() => this.setState({
                  activeIndex: i,
                  wrapperStyles: seasonStyles[i].style,
                  extraWrapperStyles: { ...standardWrapperStyles, ...extraSeasonWrapperStyles[i].style }
                })}
                key={seasons[i]}
                style={buttonStyles}
              />
            ))}
          </div>
          <JoinedDate date={date} />
        </div>
      </div>
    )
  }
}


// class App extends React.Component {
//   state = {
//     users: [
//       { name: "John" },
//       { name: "Sarah" },
//       { name: "Siri" },
//       { name: "Jim" },
//       { name: "Simon" },
//     ],
//     activeIndex: 0,
//   }
//   render() {
//     const { users, activeIndex } = this.state;
//     return (
//       <div>
//         {users.map((u, i) => (
//           <div
//             className={i === activeIndex ? 'active' : ''}
//             onClick={() => this.setState({ activeIndex: i })}
//             key={u.name} style={i === activeIndex ? { backgroundColor: '#635f5a' } : {}}
//           >
//             {u.name}
//           </div>
//         ))}
//       </div>
//     )
//   }
// }

//* time of the day
const timesStyles = [
  {
    style: {
      backgroundColor: '#9db3b4',
      padding: 10
    }
  },
  {
    style: {
      backgroundColor: '#ffff70',
      padding: 10
    }
  },
  {
    style: {
      backgroundColor: ' #FF8866',
      padding: 10
    }
  },
  {
    style: {
      backgroundColor: '#02234D',
      padding: 10
    }
  }
]
const extraTimesWrapperStyles = [
  {
    style: {
      backgroundColor: '#587983',
    }
  },
  {
    style: {
      backgroundColor: '#ffdd40',
    }
  },
  {
    style: {
      backgroundColor: '#FD6051',
    }
  },
  {
    style: {
      backgroundColor: '#030F33',
    }
  }
]

class App2 extends React.Component {
  state = {
    times: [
      'Morning',
      'Noon',
      'Evening',
      'Night'
    ],
    activeTime: 0,
    wrapperStyles: timesStyles[0].style,
    extraWrapperStyles: { ...standardWrapperStyles, ...extraTimesWrapperStyles[0].style }
  }
  render() {
    const { times, activeTime, wrapperStyles, extraWrapperStyles } = this.state
    console.log(times);
    const title = 'Time of Day Color Changer'
    const date = showDate(new Date())
    const titleWrapper = {
      textAlign: 'center',
      padding: 10,
      fontSize: 20,
      color: 'white'
    }
    const buttonWrapper = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 20
    }
    return (
      <div style={wrapperStyles}>
        <div style={extraWrapperStyles}>
          <div style={titleWrapper}>
            <strong>{title}</strong>
          </div>
          <div style={buttonWrapper}>
            {times.map((time, i) => (
              <Button
                text={times[i]}
                className={i === activeTime ? 'active' : ''}
                onClick={() => this.setState({
                  activeIndex: i,
                  wrapperStyles: timesStyles[i].style,
                  extraWrapperStyles: { ...standardWrapperStyles, ...extraTimesWrapperStyles[i].style }
                })}
                key={time[i]}
                style={buttonStyles}
              />
            ))}
          </div>
          <JoinedDate date={date} />
        </div>
      </div>
    )
  }
}

//*Loading functionality
const app3Styles = {
  justifyContent: 'center',
  textAlign: 'center',
  fontFamily: 'Consolas'
}
const bodyStyles = {
  margin: 20
}
class App3 extends React.Component {
  state = {
    count: 0,
    loading: false
  }
  endTimeout = () => {
    this.setState({ count: this.state.count + 1, loading: !this.state.loading }, () => { console.log(this.state.count); })
  }
  beginTimeOut = () => {
    setTimeout(() => { this.endTimeout() }, 5000)
    this.setState({ loading: !this.state.loading })
  }
  render() {
    const { count, loading } = this.state
    const title = 'Load Time App'
    let display
    if (count < 1 && !loading) {
      display = <p></p>
    } else if (count > 0 && !loading) {
      // display = <p>&#10003; Here is your Data</p>
      display = (
        <div>
          <p>&#10003; Here is your Data of App 2</p>
          <App2 />
        </div>
      )
    } else {
      display = <p>&#9203; Loading data...</p>
    }
    return (
      <div style={app3Styles}>
        <div >
          <Button
            text={title}
            onClick={this.beginTimeOut}
            style={{ ...buttonStyles, fontFamily: 'Consolas' }}
          ></Button>
        </div>
        <div style={bodyStyles}>
          {display}
        </div>
      </div>
    )
  }
}

const Day9 = () => (
  <>
    <App1 />
    <br />
    <br />
    <App3 />
  </>
)

ReactDOM.render(<Day9 />, document.getElementById('root'));

//*basics: https://github.com/Asabeneh/30-Days-Of-React/blob/master/09_Day_Conditional_Rendering/09_conditional_rendering_boilerplate/src/index.js


