import React from "react";
import "./followUser.css";
import avatar from '../assets/profile_pic.png'

const FollowUser = ({user}) => {
  return (
    <div className="followUser">
      <img  className="followUser__img" src={avatar} alt="img"></img>
      <div className="followUser__main">
        <h6 className="followUser__main-name">{user.username}</h6>
        <p className="followUser__main-about">{user.about}</p>
      </div>
      <button className="followUser__main-btn">Follow</button>
    </div>
  );
};

export default FollowUser;
