import React from "react";
// import "./AuthLayout.css";

function AuthLayout({ children }) {
  return (
        <div className="mx-5 my-20 sm:w-8/12 sm:mx-auto lg:w-5/12">
        {children}
      </div>
  );
}

export default AuthLayout;
