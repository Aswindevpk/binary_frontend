import React, { useContext } from "react";
import "./Navbar.css";
import AuthContext from "context/AuthContext";
import { ProfileDropdown } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


function Navbar () {
  let {isAuthenticated} = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-container-left">
          <Link to="/" className="navbar-logo">
            Binary
          </Link>
          <div className="search-bar-container">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icons" id="search-icon" />
            <input type="text" className="search-input" placeholder="Search" />
          </div>
        </div>
        <div className="navbar-links">
          {isAuthenticated ? (
            <>
              <Link to="/create-story" className="navbar-item">
                <FontAwesomeIcon icon={faPenToSquare} className="icons navbar-icon" />
                <span className="navbar-item-name">Write</span>
              </Link>
              <Link className="navbar-item" id="navbar-search">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icons navbar-icon" />
              </Link>
              <Link to="/notifications" className="navbar-item">
                <FontAwesomeIcon icon={faBell} className="icons navbar-icon" />
              </Link>
              <div>
                <ProfileDropdown />
              </div>
            </>
          ) : (
            <>
              <Link to="/" className="navbar-item">
                Articles
              </Link>
              <Link to="/plans" id="navbar-plans" className="navbar-item">
                Plans
              </Link>
              <Link to="/login" id ="navbar-sign-in" className="navbar-item">
                Sign In
              </Link>
              <Link className="black_button" to="/register">
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
