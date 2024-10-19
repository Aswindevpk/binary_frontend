import { api } from "services/api";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function useVerifyOtp(setStatus) {
  const navigate = useNavigate();
  //state of the formdata
  let [formData, setFormData] = useState({
    otp: "",
  });

  //errors

  const [errors, setErrors] = useState({
    otp: null,
  });

  const handleSubmit = async (e, username) => {
    e.preventDefault();
    setStatus("submitting");

    setErrors({
      otp: null,
      error: null,
    });

    try {
      const response = await api.post("/accounts/verify-otp/", {
        ...formData,
        username: username.username,
      });
      if (response.status === 200) {
        toast.success("Account Verified!");
        // redirect to navigate
        navigate('/login')
      }
    } catch (err) {
      if (err.response.status === 400) {
        let error_messages = err.response.data.message;
        console.log(error_messages);
        if (error_messages) {
          setStatus("typing");
          setErrors((prevErrors) => ({ ...prevErrors, ...error_messages }));
        }
      }
    }
  };

  const handleResendOtp = async () => {};

  return {
    formData,
    setFormData,
    errors,
    handleSubmit,
    handleResendOtp,
  };
}

export default useVerifyOtp;
