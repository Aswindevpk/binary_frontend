import React from "react";
// import './FilterMenu.css'; // You may not need this if all styles are converted to Tailwind.

function FilterMenu({ filters, activeFilter, setActiveFilter }) {
  return (
    <div className="flex border-b border-gray-300 overflow-x-auto scrollbar-hide gap-[30px] bg-bg items-center my-6">
      {filters.map((filter) => (
        <div
          className={`flex-shrink-0 py-4 font-semibold text-secondary cursor-pointer 
            ${filter === activeFilter ? 'border-b border-primary text-primary' : 'hover:text-primary'}`}
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
