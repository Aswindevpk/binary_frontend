import { api } from "services/api";
import { useState,useContext } from "react";
import { toast } from "sonner";
import AuthContext from "context/AuthContext";
import { useNavigate } from "react-router-dom";



function useLogin(setStatus) {
  const navigate = useNavigate();
  let { setTokens } = useContext(AuthContext);
  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [isEmailVerified, setEmailVerified] = useState(true);

  //errors
  const [errors, setErrors] = useState({
    username: null,
    password: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    setErrors({
      username: null,
    });

    try {
      const response = await api.post("/accounts/login/", formData);

      if (response.status === 200) {
        //set authenticaiton tokens
        let tokens = response.data
        setTokens(tokens)
        setEmailVerified(true);
        toast.success("Login Successful");

        //go to home
        navigate('/')
      }
    } catch (err) {
      if (err.response.status === 401) {
        setEmailVerified(false);
        setStatus("typing");
      }
      if (err.response.status === 400) {
        let error_messages = err.response.data;
        if (error_messages) {
          setStatus("typing");
          setEmailVerified(true);
          setErrors((prevErrors) => ({ ...prevErrors, ...error_messages }));
        }
      }
    }
  };
  return {
    formData,
    setFormData,
    errors,
    isEmailVerified,
    handleSubmit,
  };
}

export default useLogin;
