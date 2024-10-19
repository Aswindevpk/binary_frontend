import React, { useState } from "react";
import { FormInput } from "components";
import usePassResetRequest from "./usePassResetRequest";


function PassResetRequestForm() {
  // status of the form typing,submitting,submitted
  const [status, setStatus] = useState("typing");
  const { formData, setFormData, errors, handleSubmit } =
    usePassResetRequest(setStatus); // Destructure the hook's return values

  return (
    <form onSubmit={handleSubmit}>
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
      <button className="auth__btn" type="submit">
        Sent Link
      </button>
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
