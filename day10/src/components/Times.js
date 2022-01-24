import React from "react"
import { Button } from "./Button"
import { buttonStyles } from "../styles/button-styles"
import {timesStyles, extraTimesWrapperStyles, standardWrapperStyles, standardTimesStyle} from '../styles/time-day-app-styles/time-day-styles'

class Times extends React.Component {
  state = {
    times: [
      'Morning',
      'Noon',
      'Evening',
      'Night'
    ],
    activeTime: 0,
    wrapperStyles: {...standardTimesStyle,...timesStyles[0].style},
    extraWrapperStyles: { ...standardWrapperStyles, ...extraTimesWrapperStyles[0].style }
  }
  render() {
    const { times, activeTime, wrapperStyles, extraWrapperStyles } = this.state
    console.log(times);
    const title = 'Time of Day Color Changer'
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
                  wrapperStyles: {...standardTimesStyle,...timesStyles[i].style},
                  extraWrapperStyles: { ...standardWrapperStyles, ...extraTimesWrapperStyles[i].style }
                })}
                key={time[i]}
                style={{ ...buttonStyles, width: '100px', color: 'white' }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Times