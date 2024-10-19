import React ,{useState} from "react";
import { FilterMenu } from "../../../components";
import { Draft, Published, Responses } from "./components";
import { Link } from 'react-router-dom';

const filters = [
  { name: "Drafts", uid: "1" },
  { name: "Published", uid: "2" },
  { name: "Response", uid: "3" },
];

const StoriesMain = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  return (
    <>
      <div className="stories__main-header">
        <h1 className="main__header">Your Stories</h1>
        <div className="stories__main-header__cta">
          <Link className="green_button" to="/write">
            Write a Story
          </Link>
          <Link className="outline_button" to="/">
            Import a Story
          </Link>
        </div>
      </div>
        <FilterMenu
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      {activeFilter && activeFilter.uid === "1" && <Draft />}
      {activeFilter && activeFilter.uid === "2" && <Published />}
      {activeFilter && activeFilter.uid === "3" && <Responses />}
    </>
  );
};

export default StoriesMain;
