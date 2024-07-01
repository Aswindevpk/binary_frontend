import React, { useState, useRef, useEffect, useContext } from 'react';
import './ProfileDropdown.css'; // Import the CSS file
import avatar from '../assets/profile_pic.png'
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
      <img src={avatar} alt="Profile" className="avatar" onClick={toggleDropdown} />
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/notifications">Notifications</a></li>
            <li><a onClick={handleLogout}>Logout</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
