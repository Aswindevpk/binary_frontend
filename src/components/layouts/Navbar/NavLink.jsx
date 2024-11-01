import { Link } from 'react-router-dom';

const NavLink = ({ to, children, className, icon }) => (
  <Link to={to} className={`flex items-center cursor-pointer text-sm gap-2 text-secondary hover:text-primary ${className}`}>
    {icon}
    {children}
  </Link>
);

export default NavLink;