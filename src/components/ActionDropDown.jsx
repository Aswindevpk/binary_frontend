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
    <div className="relative flex sm:justify-center" ref={dropdownRef}>
      <FontAwesomeIcon
        onClick={(e) => {
          e.stopPropagation();
          toggleDropdownVisibility();
        }}
        icon={faEllipsis}
        className="text-secondary text-lg cursor-pointer hover:text-primary "
      />
      {isDropdownOpen && (
        <div className="absolute top-5 right-0 items-center bg-white shadow-md text-sm rounded z-20 p-3 whitespace-nowrap list-none">
          <ul className="space-y-2">
            {children}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ActionDropDown;
