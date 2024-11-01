import React ,{useState} from "react";
import { FilterMenu } from "@components";
import { Draft, Published, Responses } from "./components";
import {Header1,LinkButton} from "@components/ui";

const filterComponents = [
  { name: "Drafts", uid: "1",component:Draft },
  { name: "Published", uid: "2",component:Published  },
  { name: "Response", uid: "3" ,component:Responses },
];

const StoriesMain = () => {
  const [activeFilter, setActiveFilter] = useState(filterComponents[0]);

  const renderActiveComponent = () => {
    const ActiveComponent = activeFilter.component;
    return ActiveComponent ? <ActiveComponent /> : null;
  };
  return (
    <>
      <div className="flex items-baseline justify-between flex-wrap gap-6">
        <Header1 className="pt-10">Your Stories</Header1>
        <div className="flex items-center gap-2">
          <LinkButton color="green" variant="filled" to="/create-story">
            Write a Story
          </LinkButton>
          <LinkButton color="green" variant="outlined" to="/">
            Import a Story
          </LinkButton>
        </div>
      </div>
        <FilterMenu
         filters={filterComponents}
         activeFilter={activeFilter}
         setActiveFilter={setActiveFilter}
        />
      {renderActiveComponent()}
    </>
  );
};

export default StoriesMain;
