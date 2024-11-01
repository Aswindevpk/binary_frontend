import React, { useState,useEffect } from "react";
import useVerifyOtp from "./useVerifyOtp";
import { AuthInput, AuthButton } from "@components/ui";

function VerifyOtpForm(username) {
  // status of the form typing,submitting,submitted
  const [status, setStatus] = useState("typing");
  const { formData, setFormData, errors, handleSubmit, handleResendOtp } =
    useVerifyOtp(setStatus); // Destructure the hook's return values

  return (
    <form onSubmit={(e) => handleSubmit(e, username)}>
      {errors.error &&
        errors.error.map((error, index) => (
          <span key={index} className="formInput_error1">
            {error}
          </span>
        ))}
      <AuthInput
        key={input.id}
        {...input}
        value={formData[input.name]}
        onChange={(e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        }}
        errors={errors}
        error_message={errors[input.name]}
      />
      <OtpTimer onResend={handleResendOtp}/>
      <AuthButton type="submit">
        Verify OTP
      </AuthButton>
    </form>
  );
}



const OtpTimer = ({ initialTime = 30, onResend }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(true);

  // Start the countdown when OTP is sent
  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setIsActive(false); // Disable resend until user clicks
    }
    return () => clearTimeout(timer);
  }, [isActive, timeLeft]);

  // Resend OTP and reset timer
  const handleResend = () => {
    setTimeLeft(initialTime);
    setIsActive(true);
    if (onResend) onResend(); // Callback to trigger OTP resend
  };

  return (
    <div className="mb-3">
      {isActive ? (
        <span className="text-xs text-secondary">Resend OTP in {timeLeft}s</span>
      ) : (
        <button onClick={handleResend} className="text-primary text-xs hover:underline">
          Resend OTP
        </button>
      )}
    </div>
  );
};


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
