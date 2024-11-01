import React from "react";
import PassResetRequestForm from "./PassResetRequestForm";
import { AuthLayout } from "@components/layouts";
import { AuthHeader } from "@components/ui";

const PasswordResetRequest = () => {

  return (
    <AuthLayout>
      <AuthHeader className="text-center">Reset password</AuthHeader>
      <p className="text-center mb-4 text-sm text-secondary">
        Enter your email and we'll sent you a link to reset your password.
      </p>
      <PassResetRequestForm/>
    </AuthLayout>
  );
};

export default PasswordResetRequest;
