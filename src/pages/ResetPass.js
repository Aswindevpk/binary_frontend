import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import FormInput from '../components/FormInput';
// import { useNavigate } from 'react-router-dom';
import './ResetPass.css'


const ResetPass = () => {
  let { ResetPass } = useContext(AuthContext);
  let [values, setValues] = useState({
    password: "",
    confirmpassword: "",
    error: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValues({error:""})
    let response = await ResetPass(values.password);
    if (response) {
      setValues({ error: response.message})
    }
  };

  let inputs = [
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      errorMessage: "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character",
      label: "Password",
      required: true
    },
    {
      id: 4,
      name: "confirmpassword",
      type: "password",
      placeholder: "",
      pattern: values.password,
      errorMessage: "password not matching.",
      label: "Confirm password",
      required: true
    }
  ]


  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className='resetPass'>
      <h1 className='resetPass__header'>Reset Your Password</h1>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {values.error && <p className='resetPass__error' style={{ color: 'green' }}>{values.error}</p>}
        <button className='resetPass__btn' type="submit">Reset Password</button>
      </form>
    </div>
  )
}

export default ResetPass;
