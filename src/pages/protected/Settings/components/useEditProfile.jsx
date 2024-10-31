import { formApi } from "@services/api";
import { useState } from "react";
import { toast } from "sonner";

function useEditProfile(setStatus, setUser, user) {
  // Remove the img field from user object
  const { img, ...userWithoutImg } = user;

  const [formData, setFormData] = useState(userWithoutImg);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const formValues = new FormData();

      for (const key in formData) {
        if (key === "img") {
          formValues.append(key, formData.img);
        } else {
          formValues.append(key, formData[key]);
        }
      }
      const response = await formApi.patch("/accounts/profile/", formValues);
      if (response.status === 200) {
        const updatedUser = response.data;
        setUser(updatedUser);
        toast.success("Edit Successful");
      }
    } catch (err) {
      const errors = err.response.data;
      toast.error("Something went wrong.")
    }
    setStatus("typing");
  };
  return {
    formData,
    setFormData,
    handleSubmit,
  };
}

export default useEditProfile;
