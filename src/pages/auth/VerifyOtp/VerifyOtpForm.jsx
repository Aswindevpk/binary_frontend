import React, { useState } from "react";
import useVerifyOtp from "./useVerifyOtp";
import { AuthInput, AuthButton } from "@components/ui";

function VerifyOtpForm(username) {
  // status of the form typing,submitting,submitted
  const [status, setStatus] = useState("typing");
  const { formData, setFormData, errors, handleSubmit, handleResendOtp } =
    useVerifyOtp(setStatus); // Destructure the hook's return values

  console.log(errors);

  return (
    <form onSubmit={(e) => handleSubmit(e, username)}>
      {errors.error &&
        errors.error.map((error, index) => (
          <span key={index} className="formInput_error1">
            {error}
          </span>
        ))}
      <FormInput
        key={input.id}
        {...input}
        value={formData[input.name]}
        onChange={(e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        }}
        errors={errors}
        error_message={errors[input.name]}
      />
      {/* <div className="verifyOtp__timer">
        {timer > 0 ? (
          <p>Time remaining: {formatTime(timer)}</p>
        ) : (
          <a onClick={handleResendOtp}>Resend OTP</a>
        )}
      </div>  */}
      <AuthButton type="submit">
        Verify OTP
      </AuthButton>
    </form>
  );
}

let input = {
  id: 1,
  name: "otp",
  type: "text",
  placeholder: "",
  pattern: "^[0-9]{6}$",
  errorMessage: "otp should be 6 digits.",
  label: "Enter otp",
  required: true,
};

export default VerifyOtpForm;
