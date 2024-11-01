import React from 'react';

const AuthHeader = ({ children ,className=""}) => {
  return (
    <h2 className={`mb-8 text-3xl font-extrabold text-primary ${className}`}>
      {children}
    </h2>
  );
};

export default AuthHeader;
