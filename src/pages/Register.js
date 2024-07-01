import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from "react-router-dom";
import FormInput from '../components/FormInput';
import './Register.css'

const Register = () => {
    let { registerUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        error: []
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "",
            pattern: "^[a-zA-Z0-9]{3,16}$",
            errorMessage: "Username must be alphanumeric and 3-16 characters long",
            label: "Username",
            required: true
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "",
            errorMessage: "Enter a valid email address.",
            label: "Email",
            required: true
        },
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setValues({...values,error: [] })
        let response = await registerUser(values.username, values.email, values.password);
        if (response) {
            let errorMessages = [];

            for (let field in response.message) {
              if (response.message.hasOwnProperty(field)) {
                response.message[field].forEach((error) => {
                  errorMessages.push(error);
                });
              }
            }
        
            setValues({...values,error:errorMessages})
        }
    }

    const handleLogin = () => {
        navigate('/login')
    };


    return (
        <div className='register'>
            <h2 className='register__header'>Register to Binary</h2>
            {values.error && <p className='forgotPass__error'>{values.error}</p>}
            <form onSubmit={handleSubmit} >
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <p className='register__login-cta'>By creating an account you agree with our <a>Terms of Service</a>,<br></br> <a>Privacy Policy</a>, and our default <a>Notification Settings.</a> </p>
                <button className='register_btn' type="submit">Create account</button>
                <p className='register__login-cta' onClick={handleLogin}>Already have an Account ? <a>Log In</a></p>
            </form>
        </div>
    );
};

export default Register;
