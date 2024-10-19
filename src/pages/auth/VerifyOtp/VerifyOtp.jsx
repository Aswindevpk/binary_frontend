import React from "react";
import { AuthLayout } from "components/layouts";
import VerifyOtpForm from "./VerifyOtpForm";
import { useParams } from "react-router-dom";

function VerifyOtp() {
  //get username from params
  const { username } = useParams();

  return (
    <AuthLayout>
      <h2 className="auth__header" style={{textAlign:'center'}}>Verify Account</h2>
      <p className="auth__sub-header">
        One Time Password OTP has been sent to Your Registred Email
      </p>
      <VerifyOtpForm username={username} />
    </AuthLayout>
  );
}

export default VerifyOtp;
