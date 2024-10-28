import React from "react";
import "./ProfileList.css";
import { Post } from "assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ActionDropDown, Avatar } from "components";

function ProfileList({ user }) {
  return (
    <Link
      to="/reading-list"
      className="ProfileList"
    >
      <div className="ProfileList-main">
        <span
          className="ProfileList-main__author"
        >
          <Avatar
            username={user.username}
            image_url={user.img}
            size={"small"}
          />
          <span>{user.username}</span>
        </span>
        <h1>Reading List</h1>
        <div className="ProfileList-main__sub">
          <div className="ProfileList-main__sub">
            <span>4 stories</span>
            <FontAwesomeIcon
              icon={faLock}
              className="icons"
              color="gray"
              style={{ fontSize: "10px" }}
            />
          </div>
          <ActionDropDown>
            <>
              <li>hi</li>
            </>
          </ActionDropDown>
        </div>
      </div>
      <div className="ProfileList-sub">
        <img className="ProfileList-sub__img1" src={Post} alt="" />
        <img className="ProfileList-sub__img2" src={Post} alt="" />
        <img className="ProfileList-sub__img3" src={Post} alt="" />
      </div>
    </Link>
  );
}

export default ProfileList;
