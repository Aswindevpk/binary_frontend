import { api, formApi } from "@services/api";
import { useState } from "react";
import { toast } from "sonner";

function useProfileUpdate(setStatus, setUser, user) {
  const [formData, setFormData] = useState({
    email: user.email,
    username: user.username,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const response = await api.patch("/accounts/profile/", formData);
      if (response.status === 200) {
        setUser({
          ...user,
          email: response.data.email,
          username: response.data.username,
        });
        toast.success("Edit Successful");
      }
    } catch (err) {
      const errors = err.response.data;
      if (errors.username){
        toast.error(errors.username[0]);
      }
      if (errors.email){
        toast.error(errors.email[0]);
      }

    }
    setStatus("typing");
  };
  return {
    formData,
    setFormData,
    handleSubmit,
  };
}

export default useProfileUpdate;
