import React, { useContext } from "react";
import AuthContext from "@context/AuthContext";
import SearchBar from './SearchBar';
import NavLink from './NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";
import ProfileDropdown from '../../ProfileDropdown/ProfileDropdown'; 
import { LinkButton } from "@components/ui";

function Navbar() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <nav className="bg-bg-color border-b border-neutral px-5 py-3 relative w-full z-1">
      <div className="flex justify-between items-center mx-auto">
        <div className="flex items-center gap-5">
          <Link to="/" className="text-3xl font-bold text-color-primary font-family">Binary</Link>
          <SearchBar  />
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
    <NavLink className="hidden md:flex" to="/" id="navbar-articles">Articles</NavLink>
    <NavLink className="hidden md:flex"  to="/plans" id="navbar-plans">Plans</NavLink>
    <NavLink className="hidden md:flex" to="/login" id="navbar-sign-in">Sign In</NavLink>
    <LinkButton to="/register" color="black" variant="filled">Get Started</LinkButton>
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
