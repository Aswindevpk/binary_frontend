import React from "react";
import UserDetail from "../UserDetail";
import '../Following.css'


function People() {
  return (
    <div className="follow-people-list">
      <UserDetail />
      <UserDetail />
      <UserDetail />
    </div>
  );
}

export default People;
