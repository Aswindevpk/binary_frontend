import React, { useState } from "react";
import { FilterMenu, ProfileList } from "components";
import { About, Home } from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

const ProfileMain = ({ user }) => {
  //currently active tab
  const [activeFilter, setActiveFilter] = useState({ name: "home", uid: "1" });
  return (
    <>
      <div className="profile-main">
        <div className="profile-main__header">
          <h1 className="header1">{user.username}</h1>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="icons"
            id="tooltip-ellipsis"
            style={{ fontSize: "18px" }}
            color="gray"
          />
        </div>
        <FilterMenu
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>
      {activeFilter && activeFilter.uid === "1" && <Home />}
      {activeFilter && activeFilter.uid === "2" && <ProfileList user={user} />}
      {activeFilter && activeFilter.uid === "3" && <About user={user} />}
    </>
  );
};

const filters = [
  { name: "home", uid: "1" },
  { name: "lists", uid: "2" },
  { name: "about", uid: "3" },
];

export default ProfileMain;
