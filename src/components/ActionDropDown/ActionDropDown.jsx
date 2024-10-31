import "./ActionDropDown.css"; // Keep this if you have any remaining custom styles
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

function ActionDropDown({ children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdownVisibility = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const closeDropdownOnClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdownOnClickOutside);
    return () => {
      document.removeEventListener("mousedown", closeDropdownOnClickOutside);
    };
  }, [closeDropdownOnClickOutside]);

  return (
    <div className="relative flex justify-center" ref={dropdownRef}>
      <FontAwesomeIcon
        onClick={(e) => {
          e.stopPropagation();
          toggleDropdownVisibility();
        }}
        icon={faEllipsis}
        className="text-secondary text-lg cursor-pointer hover:text-primary"
      />
      {isDropdownOpen && (
        <div className="action-dropdown__menu absolute top-[28px] bg-white shadow-md rounded z-20 p-2">
          {children}
        </div>
      )}
    </div>
  );
}

export default ActionDropDown;
