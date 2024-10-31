import { useContext } from 'react';
import {Outlet,Navigate} from 'react-router-dom';
import AuthContext from '../context/AuthContext';

// restrict non-authenticated user to protected routes
function PrivateRoute() {
  // const isAuthenticated = true; // determine if authorized, from context or however you're doing it
  let {user} = useContext(AuthContext)
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return user ? (<Outlet />) : (<Navigate to="/login"/>);
}

export default PrivateRoute;