import React, { useContext } from "react";
import "./Navbar.css";
import AuthContext from "../../context/AuthContext";
import ProfileDropdown from "../../components/ProfileDropdown/ProfileDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  // for changing content accoding to logged user and loggedout user
  let { isAuthenticated } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-container-left">
          <a href="/" className="navbar-logo">
            Binary
          </a>
          <div className="search-bar-container">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icons" id="search-icon" />
            <input type="text" className="search-input" placeholder="Search" />
          </div>
        </div>
        <div className="navbar-links">
          {isAuthenticated ? (
            <>
              <a href="/write" className="navbar-item">
                <FontAwesomeIcon icon={faPenToSquare} className="icons navbar-icon" />
                <span className="navbar-item-name">Write</span>
              </a>
              <a className="navbar-item" id="navbar-search">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icons navbar-icon" />
              </a>
              <a className="navbar-item">
                <FontAwesomeIcon icon={faBell} className="icons navbar-icon" />
              </a>
              <div className="navbar-item">
                <ProfileDropdown />
              </div>
            </>
          ) : (
            <>
              <a href="/" className="navbar-item">
                Articles
              </a>
              <a href="/plans" className="navbar-item">
                Plans
              </a>
              <a href="/login" className="navbar-item">
                Sign In
              </a>
              <a className="black_button" href="/register">
                Get Started
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
