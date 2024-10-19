import React from "react";
import { useParams } from "react-router-dom";
import { AuthLayout } from "components/layouts";
import PassResetForm from "./PassResetForm";

const PasswordResetConfirm = () => {
  const { uid, token } = useParams();

  return (
    <AuthLayout>
      <h1 className="auth__header">Reset Your Password</h1>
      <PassResetForm uid={uid} token={token} />
    </AuthLayout>
  );
};

export default PasswordResetConfirm;
