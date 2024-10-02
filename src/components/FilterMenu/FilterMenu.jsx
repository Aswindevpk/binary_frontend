import React from "react";
import './FilterMenu.css';

function FilterMenu({ filters, activeFilter, setActiveFilter }) {
  return (
    <div className="binary__filter-menu">
      {filters.map((filter) => (
        <div
          key={filter.uid}
          className={filter === activeFilter ? "active" : ""}
          onClick={() => setActiveFilter(filter)}
        >
          {filter.name}
        </div>
      ))}
    </div>
  );
}

export default FilterMenu;
