import { FilterMenu } from "@components/index";
import React, { useState } from "react";
import People from "./components/People";

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
      <div className="breadcrumb">
        <span style={{ color: "var(--color-secondary)" }}>Appuspk</span>
        <span style={{ color: "var(--color-secondary)" }}>&gt;</span>
        <span>Following</span>
      </div>
      <h2 className="header1">Following</h2>
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
