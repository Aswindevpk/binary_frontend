import { useContext } from 'react';
import {Outlet,Navigate} from 'react-router-dom';
import AuthContext from '../context/AuthContext';


// restrict authenticated user from login ,register,etc..
function PrivateRouteLoggedIn() {
  // const isAuthenticated = true; // determine if authorized, from context or however you're doing it
  let {user} = useContext(AuthContext)
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return user ? (<Navigate to="/" />) : (<Outlet />) ;
}

export default PrivateRouteLoggedIn;