import React, { useContext,useState,useEffect } from "react";
import "./Navbar.css";
import AuthContext from "context/AuthContext";
import { ProfileDropdown } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { api } from "services/api";



function Navbar () {
  // for changing content accoding to logged user and loggedout user
  let { isAuthenticated,user } = useContext(AuthContext);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(isAuthenticated?true:false);

  //fetch user
  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        if (user){
          const response = await api.get(`/home/author/${user.user_id}`);
          setAuthor(response.data);
          setLoading(false)
        }
      } catch (error) {
        console.error("There was an error fetching the users!", error);
      }
    };

    fetchAuthor();
  }, [isAuthenticated]);

  if (loading) {
    return <div>Loading...</div>;
  }


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
              <Link to="/write" className="navbar-item">
                <FontAwesomeIcon icon={faPenToSquare} className="icons navbar-icon" />
                <span className="navbar-item-name">Write</span>
              </Link>
              <Link className="navbar-item" id="navbar-search">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icons navbar-icon" />
              </Link>
              <Link className="navbar-item">
                <FontAwesomeIcon icon={faBell} className="icons navbar-icon" />
              </Link>
              <div>
                <ProfileDropdown  author={author}/>
              </div>
            </>
          ) : (
            <>
              <Link to="/" className="navbar-item">
                Articles
              </Link>
              <Link to="/plans" className="navbar-item">
                Plans
              </Link>
              <Link to="/login" className="navbar-item">
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
