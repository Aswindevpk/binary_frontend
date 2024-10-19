import React, { useState } from "react";
import useLogin from "./useLogin";
import { Link } from "react-router-dom";
import { FormInput } from "components";

function LoginForm() {
  // status of the form typing,submitting,submitted
  const [status, setStatus] = useState("typing");
  const { formData, setFormData, errors, isEmailVerified, handleSubmit } =
    useLogin(setStatus); // Destructure the hook's return values

  return (
    <>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
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
        ))}
        {!isEmailVerified && (
          <p className="auth__para">
            Email not verified.
            <Link to={`/verify-otp/${formData.username}`}>Verify Now ?</Link>
          </p>
        )}

        <Link to="/password-reset" className="auth__para auth__cta">
          Forgot ?
        </Link>
        <button
          className="auth__btn"
          disabled={status === "submitting"}
          type="submit"
        >
          Login
        </button>
      </form>
      <p className="auth__para">
        Don't have an account? <Link className="auth__cta" to="/register">Sign up</Link>
      </p>
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
