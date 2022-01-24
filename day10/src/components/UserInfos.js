import React from "react";
import VerifiedUser from "./UserInfos/VerifiedUser.js";
import DisplayAvatar from "./UserInfos/DisplayAvatar.js";

export default class UserInfos extends React.Component {
    render() {
      const { image, userName, userPosition, userWhereAbouts } = this.props
      return (
        <div className='user-info-container-styles'>
          <DisplayAvatar image={image} />
          <VerifiedUser userName={userName} />
          <div className="extra-user-infos">{userPosition}, {userWhereAbouts}</div>
        </div>
      )
    }
  }