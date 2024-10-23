import React, { useState, useEffect } from "react";
import { FilterMenu, ProfileList } from "components";
import ReadingHistory from "./ReadingHistory";
import SaveLists from "./SaveLists";
import { api } from "services/api";
import { toast } from "sonner";
import useFetchUser from "./useFetchUser";

const filterComponents = [
  { name: "Your Lists", uid: "1", component: ProfileList },
  { name: "Saved Lists", uid: "2", component: SaveLists },
  { name: "Highlights", uid: "3", component: null }, // Assuming no component for Highlights
  { name: "Reading History", uid: "4", component: ReadingHistory },
];

export default function LibraryMain() {
  const [activeFilter, setActiveFilter] = useState(filterComponents[0]);
  const { user, loading } = useFetchUser(); // Using the custom hook

  if (loading) {
    return <p>Loading...</p>;
  }

  const renderActiveComponent = () => {
    const ActiveComponent = activeFilter.component;
    return ActiveComponent ? <ActiveComponent user={user} /> : null;
  };

  return (
    <>
      <h2 className="main__header">Library</h2>
      <FilterMenu
        filters={filterComponents}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      {renderActiveComponent()}
    </>
  );
}
