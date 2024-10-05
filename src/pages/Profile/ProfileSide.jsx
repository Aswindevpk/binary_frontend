import React from "react";
import { Footer } from "../../components";
import './Profile.css';

const ProfileSide = ({ user }) => {
  return (
    <>
      <div>
        <img className="profile__sub-avatar" src={user.img} alt="user"></img>
        <h5 className="profile__sub-username">{user.username}</h5>
        <a href="/profile" className="profile__sub-cta">Edit profile</a>
      </div>
      <Footer />
    </>
  );
};

export default ProfileSide;
