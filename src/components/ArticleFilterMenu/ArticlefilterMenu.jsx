import React, { useState } from 'react';
import './ArticleFilterMenu.css'

const ArticleFilterMenu = ({ filters, onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="filter-menu">
      {filters.map((filter) => (
        <div
          key={filter}
          className={filter === activeFilter ? 'active' : ''}
          onClick={() => handleFilterClick(filter)}
        >
          {filter}
        </div>
      ))}
    </div>
  );
};

export default ArticleFilterMenu;
