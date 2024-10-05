import "./ArticleFilterMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";

const ArticleFilterMenu = ({ filters, activeFilter, setActiveFilter }) => {
  const containerRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState({
    left: false,
    right: false,
  });

  // Check if content overflows the container and set arrow visibility
  const checkOverflow = () => {
    const container = containerRef.current;
    if (container) {
      setIsOverflowing({
        left: container.scrollLeft > 0,
        right:
          container.scrollLeft + container.clientWidth < container.scrollWidth,
      });
    }
  };

  // Scroll the content
  const scrollContent = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 100; // Amount to scroll
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Run overflow check on mount and on scroll
  useEffect(() => {
    checkOverflow(); // Initial check
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkOverflow);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkOverflow);
      }
    };
  }, []);

  return (
    <div className="filter__scroll-container">
      <div className="Articlefilter-menu" ref={containerRef}>
        <FontAwesomeIcon
          icon={faPlus}
          className="icons"
          id="filter-menu-add"
          color="gray"
        />
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
        {/* Left Arrow */}
        {isOverflowing.left && (
          <div
            className="arrow left-arrow"
            onClick={() => scrollContent("left")}
          >
            &lt;
          </div>
        )}

        {/* Right Arrow */}
        {isOverflowing.right && (
          <div
            className="arrow right-arrow"
            onClick={() => scrollContent("right")}
          >
            &gt;
          </div>
        )}
    </div>
  );
};

export default ArticleFilterMenu;
