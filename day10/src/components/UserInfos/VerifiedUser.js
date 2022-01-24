import React from "react"

export default class VerifiedUser extends React.Component {
    render() {
      const { userName } = this.props
      return (
        <div className='verified-user-styles'>
          <div className='name-styles'>{userName}</div>
          <div >&#10003;</div>
        </div>
      )
    }
  }