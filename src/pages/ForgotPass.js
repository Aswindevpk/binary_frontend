import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import FormInput from '../components/FormInput';
import './ForgotPass.css'; 


const ForgotPass = () => {
    let { forgotPass } = useContext(AuthContext);

    let [values, setValues] = useState({
        otp: "",
        error: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setValues({...values,error:""})
        let response = await forgotPass(values.email);
        if (response) {
            setValues({...values,error:response.message})
        }
    };

    let input =
    {
        id: 1,
        name: "email",
        type: "email",
        placeholder: "",
        errorMessage: "Enter a valid email address.",
        label: "Email",
        required: true
    }

    let onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    return (
        <div className='forgotPass'>
            <form onSubmit={handleSubmit} >
                <h2 className='forgotPass__header'>Forgot password</h2>
                <p className='forgotPass__desc'>Enter your email and we'll sent you a link to reset your password.</p>
                {values.error && <p className='forgotPass__error'>{values.error}</p>}
                <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                />
                <button className="forgotPass__btn" type="submit">
                    Sent Link
                </button>
            </form>
        </div>
    );
};

export default ForgotPass;
