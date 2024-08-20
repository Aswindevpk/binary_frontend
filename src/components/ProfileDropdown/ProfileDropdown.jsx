import React, { useState, useRef, useEffect, useContext } from 'react';
import './ProfileDropdown.css'; // Import the CSS file
import { Avatar } from '../../assets';
import AuthContext from '../../context/AuthContext';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  let { logoutUser } = useContext(AuthContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    logoutUser();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="profile-dropdown" ref={dropdownRef}>
      <img src={Avatar} alt="Profile" className="avatar" onClick={toggleDropdown} />
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/settings">Library</a></li>
            <li><a href="/notifications">Stories</a></li>
            <li><a href="/plans">Premium Membership</a></li>
            <li><a onClick={handleLogout}>Sign out</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
