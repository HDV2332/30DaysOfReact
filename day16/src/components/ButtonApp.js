import React, { Component } from 'react'
import { Button } from './Button'
import buttonWithStyles from './buttonWithStyles'

const NewButton = buttonWithStyles(Button)
const ReactButton = buttonWithStyles(Button, 'react')
const InfoButton = buttonWithStyles(Button, 'info')
const WarningButton = buttonWithStyles(Button, 'warning')
const DangerButton = buttonWithStyles(Button, 'danger')
const SuccessButton = buttonWithStyles(Button, 'success')

class ButtonApp extends Component {
  render() {
    return (
      <div>
        <h1>Higher Order Components</h1>
        <div className='button-app'>
          <h3>Button App</h3>
          <Button text='No Style' onClick={() => alert('I am not styled yet')} />
          <NewButton
            text='Styled Button'
            onClick={() => alert('I am the default style')}
          />
          <ReactButton text='React' onClick={() => alert('I have react color')} />
          <InfoButton
            text='Info'
            onClick={() => alert('I am styled with info color')}
          />
          <SuccessButton text='Success' onClick={() => alert('I am successful')} />
          <WarningButton
            text='Warning'
            onClick={() => alert('I warn you many times')}
          />
          <DangerButton
            text='Danger'
            onClick={() => alert('Oh no, you can not restore it')}
          />
        </div>
      </div>
    )
  }
}

export default ButtonApp;
