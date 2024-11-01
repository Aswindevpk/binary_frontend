import React, { useState } from "react";
import useRegister from "./useRegister";
import { Link } from "react-router-dom";
import { AuthPara, AuthInput, AuthButton, AuthCta } from "@components/ui";

function RegisterForm() {
  // status of the form typing,submitting,submitted
  const [status, setStatus] = useState("typing");
  const { formData, setFormData, errors, handleSubmit } =
    useRegister(setStatus); // Destructure the hook's return values

  return (
    <>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <AuthInput
            key={input.id}
            {...input}
            value={formData[input.name]}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
            status={status}
            error_message={errors[input.name]}
          />
        ))}
        <AuthPara className="text-center mb-2">
          By creating an account you agree with our
          <AuthCta className="px-1 underline">Terms of Service</AuthCta>,<br></br>
          <AuthCta className="px-1 underline">Privacy Policy</AuthCta>, and our default
          <AuthCta className="px-1 underline">Notification Settings.</AuthCta>
        </AuthPara>
        <AuthButton
          disabled={status === "submitting"}
          className="auth__btn"
          type="submit"
        >
          Create account
        </AuthButton>
      </form>
    </>
  );
}

const inputs = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "",
    pattern: "^[a-zA-Z0-9]{3,16}$",
    errorMessage: "Username must be alphanumeric and 3-16 characters long",
    label: "Username",
    required: true,
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "",
    errorMessage: "Enter a valid email address.",
    label: "Email",
    required: true,
  },
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

export default RegisterForm;
