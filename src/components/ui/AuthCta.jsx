import React from 'react';
import { Link } from 'react-router-dom';

const AuthCta = ({ children , className = '', to="/" }) => {
  return (
    <Link to={to} className={`cursor-pointer hover:text-primary text-xs text-secondary ${className}`}>
      {children}
    </Link>
  );
};

export default AuthCta;
