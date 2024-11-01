import React, { useState } from "react";
import { ActionDropDown, FilterMenu, ProfileList } from "@components";
import { About, Home } from "./components";
import { Header1 } from "@components/ui";


const filterComponents  = [
  { name: "home", uid: "1", component:Home },
  { name: "lists", uid: "2", component:ProfileList },
  { name: "about", uid: "3",component:About },
];

const ProfileMain = ({ user }) => {
  const [activeFilter, setActiveFilter] = useState(filterComponents[0]);

  const renderActiveComponent = () => {
    const ActiveComponent = activeFilter.component;
    return ActiveComponent ? <ActiveComponent user={user} /> : null;
  };

  return (
    <>
      <div className="">
        <div className="flex items-baseline justify-between">
          <Header1 className="mt-10">{user.username}</Header1>
          <ActionDropDown>
            <>
              <li>Copy link to profile</li>
              <li>Design your profile</li>
            </>
          </ActionDropDown>
        </div>
        <FilterMenu
        filters={filterComponents}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        />
      </div>
      {renderActiveComponent()}
    </>
  );
};



export default ProfileMain;
