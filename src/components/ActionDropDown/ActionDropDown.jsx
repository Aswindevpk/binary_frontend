import "./ActionDropDown.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

function ActionDropDown({ children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  //usecllback for performance
  const toggleDropdownVisibility = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  });

  //useCallback for performance
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
    <div className="action-dropdown" ref={dropdownRef}>
      <>
        <FontAwesomeIcon
          onClick={(e)=>{
            e.stopPropagation();
            toggleDropdownVisibility();
            }}
          icon={faEllipsis}
          className="icons action-dropdown__toggler"
        />
      </>
      {isDropdownOpen && (
        <div className="action-dropdown__menu">{children}</div>
      )}
    </div>
  );
}

export default ActionDropDown;
