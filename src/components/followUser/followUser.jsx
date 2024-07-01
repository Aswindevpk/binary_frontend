import React from "react";
import "./followUser.css";
import avatar from '../assets/profile_pic.png'

const FollowUser = () => {
  return (
    <div className="followUser">
      <img  className="followUser__img" src={avatar} alt="imga"></img>
      <div className="followUser__main">
        <h6 className="followUser__main-name">Username</h6>
        <p className="followUser__main-about">about user afdsfoisdjofisdjofsdjifo</p>
      </div>
      <button className="followUser__main-btn">Follow</button>
    </div>
  );
};

export default FollowUser;
