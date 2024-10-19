import React from "react";
import "./AuthLayout.css";
import PropTypes from "prop-types";

function AuthLayout({ children }) {
  return <div className="authlayout">{children}</div>;
}
AuthLayout.propTypes = {
  Main: PropTypes.elementType,
  Side: PropTypes.elementType,
};
export default AuthLayout;
