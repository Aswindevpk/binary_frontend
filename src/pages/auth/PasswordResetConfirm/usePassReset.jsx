import { api } from "@services/api";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";


function usePassReset(setStatus) {
  const navigate = useNavigate();
  //state of the formdata
  let [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
  });

  //errors
  const [errors, setErrors] = useState({
    password: null,
    confirm_password: null,
  });

  const handleSubmit = async (e,token,uid) => {
    e.preventDefault();

    setStatus("submitting");

    setErrors({
      password: null,
      confirm_password: null,
    });

    try {
      const response = await api.post("/accounts/password-reset-confirm/", {...formData,token:token,uidb64:uid});

      if (response.status === 200) {
        toast.success("Password Reset Successfull");

        //redirect to login
        navigate('/login');
      }
    } catch (err) {
      if (err.response.status === 400) {
        let error_messages = err.response.data;
        if (error_messages) {
          setStatus("typing");
          setErrors((prevErrors) => ({ ...prevErrors, ...error_messages }));
        }
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

export default usePassReset;
