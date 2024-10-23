import { FilterMenu } from "components";
import React, { useState } from "react";
import {
  Account,
  Publishing,
  Notification,
  Membership,
  Security,
} from "./components";


const SettingsMain = () => {
  const [activeFilter, setActiveFilter] = useState({
    name: "Account",
    uid: "2",
  });
  
  return (
    <>
      <h2 className="header1">Settings</h2>
      <FilterMenu
        filters={filters}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      {activeFilter && activeFilter.name === "Account" && <Account />}
      {activeFilter && activeFilter.name === "Publishing" && <Publishing />}
      {activeFilter && activeFilter.name === "Notification" && <Notification />}
      {activeFilter && activeFilter.name === "Membership and Payment" && (
        <Membership />
      )}
      {activeFilter && activeFilter.uid === "5" && <Security />}
    </>
  );
};

const filters = [
  { name: "Account", uid: "1" },
  { name: "Publishing", uid: "2" },
  { name: "Notification", uid: "3" },
  { name: "Membership and Payment", uid: "4" },
  { name: "Security and apps", uid: "5" },
];


export default SettingsMain;
