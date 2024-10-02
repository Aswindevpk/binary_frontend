import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { write,Search } from "../../assets";
import AuthContext from "../../context/AuthContext";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell,faPenToSquare } from '@fortawesome/free-regular-svg-icons';  // 


const Navbar = () => {
  let { isAuthenticated} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };



  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-container-left">
          <div onClick={() => handleNavigation("/")} className="navbar-logo">
            Binary
          </div>
          <div className="search-bar-container">
            <img src={Search} alt="Search Icon" className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="navbar-links">
          {isAuthenticated ? (
            <>
              <div className="navbar-item" onClick={() => handleNavigation("/write")}>
                <FontAwesomeIcon icon={faPenToSquare} className="icons"/>
                <span className="navbar-item-name">Write</span>
              </div>
              <div className="navbar-item">
                <FontAwesomeIcon icon={faBell} className="icons"/>
              </div>
              <div className="navbar-item">
                <ProfileDropdown/>
              </div>
            </>
          ) : (
            <>
              <div
                onClick={() => handleNavigation("/")}
                className="navbar-item"
              >
                Articles
              </div>
              <div
                onClick={() => handleNavigation("/plans")}
                className="navbar-item"
              >
                Plans
              </div>
              <div
                className="navbar-item"
                onClick={() => handleNavigation("/login")}
              >
                Sign In
              </div>
              <div
                className="navbar-item navbar-signup"
                onClick={() => handleNavigation("/register")}
              >
                Get Started
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
