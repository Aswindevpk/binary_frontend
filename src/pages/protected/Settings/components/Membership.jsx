import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Membership = () => {
  return (
    <div className="settings_menu">
      <div className="settings_account_item">
        <div className="settings_heading_group">
          <span className="settings_heading">
            Upgrade to a Medium Membership
          </span>
          <span className="settings_desc">
            Open the Medium app from your mobile device to make changes to push
            notifications.
          </span>
        </div>
        <FontAwesomeIcon icon={faUpRightFromSquare} className="icons" />
      </div>
    </div>
  )
}

export default Membership