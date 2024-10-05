import React ,{useState} from "react";
import { FilterMenu } from "../../components";
import { Draft, Published, Responses } from "./components";

const filters = [
  { name: "Drafts", uid: "1" },
  { name: "Published", uid: "2" },
  { name: "Response", uid: "3" },
];

const StoriesMain = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  return (
    <div className="stories__main">
      <div className="stories__main-header">
        <h1>Your Stories</h1>
        <div className="stories__main-header__cta">
          <a className="green_button" href="/write">
            Write a Story
          </a>
          <a className="outline_button" href="">
            Import a Story
          </a>
        </div>
      </div>
      <div className="filter_menu">
        <FilterMenu
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>
      {activeFilter && activeFilter.uid === "1" && <Draft />}
      {activeFilter && activeFilter.uid === "2" && <Published />}
      {activeFilter && activeFilter.uid === "3" && <Responses />}
    </div>
  );
};

export default StoriesMain;
