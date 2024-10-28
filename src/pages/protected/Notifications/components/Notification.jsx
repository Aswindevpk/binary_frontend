import { Avatar } from "components/index";
import React from "react";
import "./Notification.css";

function Notification() {
  return (
    <div className="notification">
      <Avatar username="aswin" size="medium" />
      <div className="notification__content">
        <p className="notification__content-message">
          Aswin <span>started following you</span>
        </p>
        <span className="notification__content-date">Jul 24, 2024</span>
      </div>
    </div>
  );
}

export default Notification;
