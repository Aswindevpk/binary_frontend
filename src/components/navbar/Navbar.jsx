import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { write,Search } from "../../assets";
import AuthContext from "../../context/AuthContext";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";


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
                <ion-icon name="create-outline"></ion-icon>
                <span className="navbar-item-name">Write</span>
               
              </div>
              <div className="navbar-item">
              <ion-icon name="notifications-outline"></ion-icon>
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
