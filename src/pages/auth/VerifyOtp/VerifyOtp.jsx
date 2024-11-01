import React from "react";
import { AuthLayout } from "@components/layouts";
import VerifyOtpForm from "./VerifyOtpForm";
import { useParams } from "react-router-dom";
import { AuthHeader } from "@components/ui";

function VerifyOtp() {
  //get username from params
  const { username } = useParams();

  return (
    <AuthLayout>
      <AuthHeader className="text-center">Verify Account</AuthHeader>
      <p className="text-center mb-6 text-sm text-secondary">
        One Time Password OTP has been sent to Your Registred Email
      </p>
      <VerifyOtpForm username={username} />
    </AuthLayout>
  );
}

export default VerifyOtp;
