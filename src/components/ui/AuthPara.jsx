import React from 'react';

const AuthPara = ({ children }) => {
  return (
    <p className="pt-2 text-center mt-2 text-[0.8rem] font-[var(--font-family)] text-[var(--color-secondary)]">
      {children}
    </p>
  );
};

export default AuthPara;
