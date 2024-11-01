import React, { useState} from "react";
import { FilterMenu, ProfileList } from "@components";
import ReadingHistory from "./ReadingHistory";
import SaveLists from "./SaveLists";
import useFetchUser from "./useFetchUser";
import { Header1 } from "@components/ui";


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
      <Header1 className="mt-10" >Library</Header1>
      <FilterMenu
        filters={filterComponents}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      {renderActiveComponent()}
    </>
  );
}
