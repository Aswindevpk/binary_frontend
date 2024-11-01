import React, { useState } from "react";
import usePassResetRequest from "./usePassResetRequest";
import { AuthButton, AuthInput } from "@components/ui";



function PassResetRequestForm() {
  // status of the form typing,submitting,submitted
  const [status, setStatus] = useState("typing");
  const { formData, setFormData, errors, handleSubmit } =
    usePassResetRequest(setStatus); // Destructure the hook's return values

  return (
    <form onSubmit={handleSubmit}>
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
      <AuthButton type="submit">
        Sent Link
      </AuthButton>
    </form>
  );
}

let input = {
  id: 1,
  name: "email",
  type: "email",
  placeholder: "",
  errorMessage: "Enter a valid email address.",
  label: "Email",
  required: true,
};

export default PassResetRequestForm;
