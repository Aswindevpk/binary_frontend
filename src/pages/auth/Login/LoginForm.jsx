import React, { useState } from "react";
import useLogin from "./useLogin";
import { Link } from "react-router-dom";
import { AuthButton, AuthPara, AuthInput,AuthCta } from "@components/ui";

function LoginForm() {
  // status of the form typing,submitting,submitted
  const [status, setStatus] = useState("typing");
  const { formData, setFormData, errors, isEmailVerified, handleSubmit } =
    useLogin(setStatus); // Destructure the hook's return values

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
            errors={errors}
            error_message={errors[input.name]}
          />
        ))}

        {!isEmailVerified && (
          <AuthPara className="text-right">
            Email not verified.
            <AuthCta className="ml-1 hover:underline" to={`/verify-otp/${formData.username}`}>Verify Now ?</AuthCta>
          </AuthPara>
        )}

        <AuthPara className="mb-2">
          <Link className="cursor-pointer hover:text-primary" to="/password-reset">Forgot ?</Link>
        </AuthPara>
        <AuthButton disabled={status === "submitting"} type="submit">
          Login
        </AuthButton>
      </form>
    </>
  );
}

//inputs data
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
    name: "password",
    type: "password",
    placeholder: "",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    errorMessage:
      "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character",
    label: "Password",
    required: true,
  },
];

export default LoginForm;
