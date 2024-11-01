import React from 'react';

const Header1 = ({ children,className="" }) => {
  return (
    <h2 className={`text-4xl  font-extrabold ${className}`}>
      {children}
    </h2>
  );
};

export default Header1;