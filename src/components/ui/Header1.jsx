import React from 'react';

const Header1 = ({ children }) => {
  return (
    <h2 className="font-[var(--font-family)] text-[42px]  font-extrabold text-[var(--primary-color)]">
      {children}
    </h2>
  );
};

export default Header1;