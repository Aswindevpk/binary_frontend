import React, { useState, useRef, useEffect, useContext } from 'react';
import './ProfileDropdown.css'; // Import the CSS file
import { Avatar } from '../../assets';
import AuthContext from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faBookmark,faFileText,faChartBar} from '@fortawesome/free-regular-svg-icons'; 

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
          <div className='dropdown-menu__main'>
            <li>
              <FontAwesomeIcon icon={faUser} className="icons"/>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faBookmark} className="icons"/>
              <a href="/library">Library</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faFileText} className="icons"/>
              <a href="/stories">Stories</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faChartBar} className="icons"/>
              <a href="/stats">Stats</a>
            </li>
          </div>
          <div className='dropdown-menu__section2'>
            <li>
              <a href="/settings">settings</a>
              </li>
            <li>
              <a href="">Refine recommmendations</a></li>
            <li>Manage publications</li>
            <li>Help</li>
          </div>
          <div className='dropdown-menu__section3'>
            <li>
              <a href="/plans">Become a Binary member</a>
            </li>
            <li>Create a Mastodon account</li>
            <li>Apply for author verification</li>
            <li>Gift a membership</li>
          </div>
          <div className='dropdown-menu__section4'>
            <li >
              <a onClick={handleLogout}>Sign out 
              <p>ap******@gmail.com</p>
              </a>
            </li>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
