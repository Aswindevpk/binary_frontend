import React from "react";
import "./UserDetail.css";
import { Avatar } from "@components/index";

function UserDetail() {
  return (
    <div className="user-detail">
      <Avatar username="aswin" size="medium-large" />
      <div className="user-detail__content">
        <span className="user-detail__username">Aswin</span>
        <span className="user-detail__about">full-stackish developer, late bloomer coder and power google user and owner of Parsity.io</span>
      </div>
      <button className="green_button">Following</button>
    </div>
  );
}

export default UserDetail;
