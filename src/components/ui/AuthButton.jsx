import React from 'react';

const AuthButton = ({ type = 'button', disabled = false, children }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`w-full py-2 rounded-full text-white
        ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-slate-600'}`}
    >
      {children}
    </button>
  );
};

export default AuthButton;
