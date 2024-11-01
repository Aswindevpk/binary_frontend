import "./ArticleFilterMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";

const FilterItem = ({ filter, isActive, onClick }) => (
  <div
    className={`flex-shrink-0 py-4 text-sm font-medium ${isActive ? 'border-b border-primary text-primary' : 'text-secondary'} cursor-pointer hover:text-primary`}
    onClick={onClick}
  >
    {filter.name}
  </div>
);

const ArticleFilterMenu = ({ filters, activeFilter, setActiveFilter }) => {
  const containerRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState({ left: false, right: false });

  const checkOverflow = () => {
    const container = containerRef.current;
    if (container) {
      setIsOverflowing({
        left: container.scrollLeft > 0,
        right: container.scrollLeft + container.clientWidth < container.scrollWidth,
      });
    }
  };

  const scrollContent = (direction) => {
    const container = containerRef.current;
    container.scrollBy({
      left: direction === "left" ? -100 : 100,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    checkOverflow();
    const container = containerRef.current;
    container.addEventListener("scroll", checkOverflow);
    return () => container.removeEventListener("scroll", checkOverflow);
  }, []);

  return (
    <div className="relative flex items-center">
      <div
        className="flex border-b border-neutral gap-[35px] bg-bg sticky top-0 overflow-x-auto scrollbar-hide w-full Articlefilter-menu"
        ref={containerRef}
      >
        <FontAwesomeIcon
          icon={faPlus}
          className="p-1 rounded-full w-4 h-4 hover:bg-gray-200 my-auto"
          color="gray"
          id="filter-menu-add"
        />
        {filters.map((filter) => (
          <FilterItem
            key={filter.uid}
            filter={filter}
            isActive={filter === activeFilter}
            onClick={() => setActiveFilter(filter)}
          />
        ))}
      </div>
      {isOverflowing.left && (
        <div
          className="Articlefilter-menu__arrow absolute z-10 text-xl cursor-pointer"
          onClick={() => scrollContent("left")}
        >
          &lt;
        </div>
      )}
      {isOverflowing.right && (
        <div
          className="Articlefilter-menu__arrow absolute right-0 z-20 text-xl cursor-pointer"
          onClick={() => scrollContent("right")}
        >
          &gt;
        </div>
      )}
    </div>
  );
};

export default ArticleFilterMenu;
