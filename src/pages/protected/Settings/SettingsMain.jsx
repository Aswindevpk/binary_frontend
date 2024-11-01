import { FilterMenu } from "@components";
import React, { useState } from "react";
import {
  Account,
  Publishing,
  Notification,
  Membership,
  Security,
} from "./components";
import {Header1} from "@components/ui";

const filterComponents = [
  { name: "Account", uid: "1",component:Account },
  { name: "Publishing", uid: "2" ,component:Publishing },
  { name: "Notification", uid: "3" ,component:Notification  },
  { name: "Membership and Payment", uid: "4",component:Membership },
  { name: "Security and apps", uid: "5",component:Security },
];


const SettingsMain = () => {
  const [activeFilter, setActiveFilter] = useState(filterComponents[0]);

  const renderActiveComponent = () => {
    const ActiveComponent = activeFilter.component;
    return ActiveComponent ? <ActiveComponent /> : null;
  };
  
  return (
    <>
      <Header1 className="pt-10">Settings</Header1>
      <FilterMenu
        filters={filterComponents}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      {renderActiveComponent()}
    </>
  );
};




export default SettingsMain;
