import React, { useState, useRef, useEffect, useContext } from "react";
import "./ProfileDropdown.css"; // Import the CSS file
import AuthContext from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBookmark,
  faFileText,
  faChartBar,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import Avatar from "components/Avatar/Avatar";

const ProfileDropdown = ({ author }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  let { logoutUser,user} = useContext(AuthContext);

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
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="profile-dropdown" ref={dropdownRef}>
      <div onClick={toggleDropdown}>
        <Avatar username={author.username} image_url={author.img} size={"medium"}/>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-menu__main">
            <li>
              <FontAwesomeIcon
                icon={faUser}
                className="icons NavDropdownIcon"
              />
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faBookmark}
                className="icons NavDropdownIcon"
              />
              <Link to="/library">Library</Link>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faFileText}
                className="icons NavDropdownIcon"
              />
              <Link to="/stories">Stories</Link>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faChartBar}
                className="icons NavDropdownIcon"
              />
              <Link to="/stats">Stats</Link>
            </li>
          </div>
          <div className="dropdown-menu__section2">
            <li>
              <Link to="/settings">settings</Link>
            </li>
            <li>
              <Link to="/settings">Refine recommmendations</Link>
            </li>
            <li>Manage publications</li>
            <li>Help</li>
          </div>
          <div className="dropdown-menu__section3">
            <li>
              <Link to="/plans">Become a Binary member</Link>
            </li>
            <li>Create a Mastodon account</li>
            <li>Apply for author verification</li>
            <li>Gift a membership</li>
          </div>
          <div className="dropdown-menu__section4">
            <li>
              <span onClick={handleLogout}>
                Sign out
                <p>{author.email}</p>
              </span>
            </li>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
