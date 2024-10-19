import React from "react";
import './FilterMenu.css';

function FilterMenu({ filters, activeFilter, setActiveFilter }) {
  return (
    <div className="filter-menu">
      {filters.map((filter) => (
        <div className={`filter-menu__filter para1 ${filter === activeFilter ? "active" : ""}`}
          key={filter.uid}
          onClick={() => setActiveFilter(filter)}
        >
          {filter.name}
        </div>
      ))}
    </div>
  );
}

export default FilterMenu;
