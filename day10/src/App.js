import React from 'react';
import remyPuke from './images/remyPuke.png'
import UserInfos from './components/UserInfos';
import SkillsRow from './components/SkillsRow';
import JoinedDate from './components/JoinedDate';
import { showDate } from './components/utils/showDate';
import { Button } from './components/Button'
import { buttonStyles } from './styles/button-styles';
import { appStyles, appWrapperStyles, skillStyles } from './styles/light-theme'
import { appStylesDarkTheme, appWrapperStylesDarkTheme, skillStylesDarkTheme } from './styles/dark-theme'
import Times from './components/Times';
import { NumBoxApp } from './components/NumBoxApp';

class App extends React.Component {
  state = {
    styleCount: 0,
    appStyles: appStyles,
    appWrapperStyles: appWrapperStyles,
    skillStyles: skillStyles
  }
  changeTheme = () => {
    let currentAppStyles = this.state.appStyles
    let currentAppWrapperStyles = this.state.appWrapperStyles
    let currentSkillStyles = this.state.skillStyles
    if (this.state.styleCount % 2 === 0) {
      currentAppStyles = { ...appStyles, ...appStylesDarkTheme }
      currentAppWrapperStyles = { ...appWrapperStyles, ...appWrapperStylesDarkTheme }
      currentSkillStyles = { ...skillStyles, ...skillStylesDarkTheme }
    } else {
      currentAppStyles = appStyles
      currentAppWrapperStyles = appWrapperStyles
      currentSkillStyles = skillStyles
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
    const name = 'hdv'
    const userPosition = 'Intern'
    const userWhereAbouts = 'Hanoi'
    const dc = 'Technologies to learn'
    const skills = [
      'HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux',
      'Node', 'MongoDB', 'Flask', 'Django', 'Numpy',
      'Pandas', 'Data Analysis', 'MYSQL', 'GraphQL',
      'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'
    ]
    let day = showDate(new Date())
    const btnText = 'Change theme'
    let appStyles = this.state.appStyles
    let appWrapperStyles = this.state.appWrapperStyles
    let skillStyles = this.state.skillStyles
    return (
      <div style={appWrapperStyles}>
        <div style={appStyles}>
          <UserInfos image={remyPuke} userName={name} userPosition={userPosition} userWhereAbouts={userWhereAbouts} />
          <SkillsRow description={dc} skills={skills} indivisualStyles={skillStyles} />
          <JoinedDate date={day} />
          <Button style={buttonStyles} text={btnText} onClick={this.changeTheme}/>
          <Times/>
          <NumBoxApp/>
        </div>
      </div>
    );
  }
}

export default App;
