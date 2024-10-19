import React from "react";
import "./ProfileList.css";
import { Post } from "assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Avatar } from "components";



function ProfileList({ user }) {
  return (
    <Link to='/reading-list' className="ProfileList">
      <div className="ProfileList-main">
        <div className="ProfileList-main__author">
          <Avatar username={user.username} image_url={user.img} size={'small'}/>
          <span>{user.username}</span>
        </div>
        <h1>Reading List</h1>
        <div className="ProfileList-main__sub">
          <span>4 stories</span>
          <FontAwesomeIcon
            icon={faLock}
            className="icons"
            color="gray"
            style={{ fontSize: "12px" }}
          />
        </div>
      </div>
      <div className="ProfileList-sub">
        <img src={Post} alt="" />
      </div>
    </Link>
  );
}

export default ProfileList;
