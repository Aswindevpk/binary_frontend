import React from "react";
import UserDetail from "../Following/UserDetail";
import './Followers.css'

function FollowersMain() {
  return (
    <>
      <div className="breadcrumb">
        <span style={{ color: "var(--color-secondary)" }}>Appuspk</span>
        <span style={{ color: "var(--color-secondary)" }}>&gt;</span>
        <span>Following</span>
      </div>
      <h2 className="header1">Followers</h2>
      <div className="follow-user-list">
        <UserDetail />
        <UserDetail />
        <UserDetail />
      </div>
    </>
  );
}

export default FollowersMain;
