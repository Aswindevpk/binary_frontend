import React from "react";
// import "./AuthLayout.css";

function AuthLayout({ children }) {
  return (
    <div className="w-full max-w-[550px] flex flex-col justify-center rounded-[12px] mx-auto mt-[100px]">
      {children}
    </div>
  );
}

export default AuthLayout;
