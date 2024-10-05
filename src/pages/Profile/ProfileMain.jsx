import React, { useState } from "react";
import { FilterMenu, ProfileList } from "../../components";
import { About, Home } from "./components";

const filters = [
  { name: "home", uid: "1" },
  { name: "lists", uid: "2" },
  { name: "about", uid: "3" },
];

const ProfileMain = ({ user }) => {
  const [activeFilter, setActiveFilter] = useState({ name: "home", uid: "1" });

  return (
    <>
      <h2 className="profile__main-header">{user.username}</h2>
      <FilterMenu
        filters={filters}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      {activeFilter && activeFilter.uid === "1" && <Home />}
      {activeFilter && activeFilter.uid === "2" && <ProfileList user={user} />}
      {activeFilter && activeFilter.uid === "3" && <About />}
    </>
  );
};

export default ProfileMain;
