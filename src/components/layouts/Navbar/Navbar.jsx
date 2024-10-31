import React, { useContext } from "react";
import AuthContext from "@context/AuthContext";
import SearchBar from './SearchBar';
import NavLink from './NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";
import ProfileDropdown from '../../ProfileDropdown/ProfileDropdown'; 

function Navbar() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <nav className="bg-bg-color border-b border-color-border p-2 relative w-full z-20">
      <div className="flex justify-between items-center mx-auto">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold text-color-primary font-family">Binary</Link>
          <SearchBar />
        </div>
        <div className="flex items-center gap-10">
          {isAuthenticated ? <AuthLinks /> : <GuestLinks />}
        </div>
      </div>
    </nav>
  );
}

const GuestLinks = () => (
  <>
    <NavLink to="/" className="" id="navbar-articles">Articles</NavLink>
    <NavLink to="/plans" className="" id="navbar-plans">Plans</NavLink>
    <NavLink to="/login" className="" id="navbar-sign-in">Sign In</NavLink>
    <NavLink to="/register" className="bg-black text-white py-2 px-4 rounded-full">Get Started</NavLink>
  </>
);

const AuthLinks = () => (
  <>
    <NavLink to="/create-story" icon={<FontAwesomeIcon icon={faPenToSquare} className="text-lg" />}>
      Write
    </NavLink>
    <NavLink to="/notifications" icon={<FontAwesomeIcon icon={faBell} className="text-lg" />}>
    </NavLink>
    <ProfileDropdown />
  </>
);

export default Navbar;
