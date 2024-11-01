import { FilterMenu } from "@components/index";
import React, { useState } from "react";
import People from "./components/People";
import { Header1 } from "@components/ui";

const filterComponents = [
  { name: "People", uid: "1", component:People },
  { name: "Publications", uid: "2", component:null },
];

function FollowingMain() {
  const [activeFilter, setActiveFilter] = useState(filterComponents[0]);

  const renderActiveComponent = () => {
    const ActiveComponent = activeFilter.component;
    return ActiveComponent ? <ActiveComponent /> : null;
  };

  return (
    <>
      <div className="flex gap-1 pt-10 text-sm text-secondary">
        <span >Appuspk</span>
        <span >&gt;</span>
        <span >Following</span>
      </div>
      <Header1 className="pt-1">Following</Header1>
      <FilterMenu
        filters={filterComponents}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      {renderActiveComponent()}
    </>
  );
}

export default FollowingMain;
