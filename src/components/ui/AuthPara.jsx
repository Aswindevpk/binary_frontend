import React from 'react';

const AuthPara = ({ children , className = '' }) => {
  return (
    <p className={`text-xs text-secondary ${className}`}>
      {children}
    </p>
  );
};

export default AuthPara;
