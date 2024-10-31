import { api } from "@services/api";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function useRegister(setStatus) {
  const navigate = useNavigate(); // To programmatically navigate to the login page
  //state of the formdata
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  //errors
  const [errors, setErrors] = useState({
    username: null,
    email: null,
    password: null,
    confirm_password: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    setErrors({
        username: null,
        email: null,
        password: null,
        confirm_password: null,
      });

    try {
      const response = await api.post("/accounts/register/", formData);

      //user created
      if (response.status === 201) {
        toast.success("User registerd Successfully");
        // Redirect to verify otp
        navigate(`/verify-otp/${formData.username}`);
        toast.success("Otp has sent to Email");
      }
    } catch (err) {
      let error_messages = err.response.data;
      console.log(error_messages)
      if (error_messages) {
        setStatus("typing");
        setErrors((prevErrors) => ({ ...prevErrors, ...error_messages }));
      }
    }
  };
  return {
    formData,
    setFormData,
    errors,
    handleSubmit,
  };
}

export default useRegister;
