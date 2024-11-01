import { FilterMenu } from "@components/index";
import React, { useState } from "react";
import All from "./components/All";
import Responses from "./components/Responses";
import { Header1 } from "@components/ui";

const filterComponents = [
  { name: "All", uid: "1", component: All },
  { name: "Responses", uid: "2", component: Responses },
];

function NotificationsMain() {
  const [activeFilter, setActiveFilter] = useState(filterComponents[0]);

  const renderActiveComponent = () => {
    const ActiveComponent = activeFilter.component;
    return ActiveComponent ? <ActiveComponent /> : null;
  };

  return (
    <>
      <Header1 className="pt-10"> Notifications</Header1>
      <FilterMenu
        filters={filterComponents}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      {renderActiveComponent()}
    </>
  );
}

export default NotificationsMain;
