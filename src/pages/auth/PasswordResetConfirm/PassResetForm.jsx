import React, { useState } from "react";
import usePassReset from "./usePassReset";
import { AuthInput,AuthButton } from "@components/ui";

function PassResetForm({ uid, token }) {
  // status of the form typing,submitting,submitted
  const [status, setStatus] = useState("typing");
  const { formData, setFormData, errors, handleSubmit } =
    usePassReset(setStatus); // Destructure the hook's return values

  return (
    <form onSubmit={(e) => handleSubmit(e, token, uid)}>
      {errors.error &&
        errors.error.map((error, index) => (
          <span key={index} className="auth__error">
            {error}
          </span>
        ))}
      {inputs.map((input) => (
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
      ))}
      <AuthButton className="auth__btn" type="submit">
        Reset Password
      </AuthButton>
    </form>
  );
}

let inputs = [
  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    errorMessage:
      "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character",
    label: "Password",
    required: true,
  },
  {
    id: 4,
    name: "confirm_password",
    type: "password",
    placeholder: "",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    errorMessage: "password not matching.",
    label: "Confirm password",
    required: true,
  },
];

export default PassResetForm;
