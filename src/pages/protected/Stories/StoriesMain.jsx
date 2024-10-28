import React ,{useState} from "react";
import { FilterMenu } from "../../../components";
import { Draft, Published, Responses } from "./components";
import { Link } from 'react-router-dom';

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
      <div className="stories__main-header">
        <h1 className="header1">Your Stories</h1>
        <div className="stories__main-header__cta">
          <Link className="green_button" to="/create-story">
            Write a Story
          </Link>
          <Link className="outline_button" to="/">
            Import a Story
          </Link>
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
