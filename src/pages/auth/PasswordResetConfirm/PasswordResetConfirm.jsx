import React from "react";
import { useParams } from "react-router-dom";
import { AuthLayout } from "@components/layouts";
import PassResetForm from "./PassResetForm";
import { AuthHeader } from "@components/ui";

const PasswordResetConfirm = () => {
  const { uid, token } = useParams();

  return (
    <AuthLayout>
      <AuthHeader>Reset Your Password</AuthHeader>
      <PassResetForm uid={uid} token={token} />
    </AuthLayout>
  );
};

export default PasswordResetConfirm;
