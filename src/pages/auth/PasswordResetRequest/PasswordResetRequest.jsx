import React from "react";
import PassResetRequestForm from "./PassResetRequestForm";
import { AuthLayout } from "components/layouts";

const PasswordResetRequest = () => {

  return (
    <AuthLayout>
      <h2 className="auth__header" style={{textAlign:'center'}}>Reset password</h2>
      <p className="auth__sub-header">
        Enter your email and we'll sent you a link to reset your password.
      </p>
      <PassResetRequestForm/>
    </AuthLayout>
  );
};

export default PasswordResetRequest;
