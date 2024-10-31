import React from 'react';

const AuthHeader = ({ children }) => {
  return (
    <h2 className="font-[var(--font-family)] mb-8 text-[1.7rem] font-extrabold text-[var(--primary-color)]">
      {children}
    </h2>
  );
};

export default AuthHeader;
