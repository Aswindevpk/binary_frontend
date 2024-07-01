import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import FormInput from '../components/FormInput';
import './VerifyOtp.css'

function VerifyOtp() {
    let { verifyOtp, genarateOtp } = useContext(AuthContext);
    const location = useLocation();
    let navigate = useNavigate();

    let [values, setValues] = useState({
        otp: "",
        error: "",
        email: ""
    });
    const [timer, setTimer] = useState(300); //300 seconds for 5 min
    let [isVerified,setIsVerified] = useState(false)

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);

            return () => clearInterval(countdown);
        }
    }, [timer]);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const encodedEmail = queryParams.get('email');
        const decodedEmail = encodedEmail ? decodeURIComponent(encodedEmail) : null;

        setValues({ email: decodedEmail });

    }, [location.search]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setValues({ ...values, error: "" })
        let response = await verifyOtp(values.email, values.otp);
        if (response.status) {
            setIsVerified(true)
        }else{
            setValues({ ...values, error:response.message })
        }
    };

    const handleResendOtp = async () => {
        setValues({ ...values, error: ""})
        let response = await genarateOtp(values.email);
        if (response.status) {
            setValues({ ...values, error: response.message})
        }else{
            setValues({ ...values, error:response.message })
        }
    };

    let input =
    {
        id: 1,
        name: "otp",
        type: "text",
        placeholder: "",
        pattern: "^[0-9]{4}$",
        errorMessage: "otp should be 4 digits.",
        label: "Enter otp",
        required: true
    }

    let onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleLogin =()=>{
        navigate('/login')
    }

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      };


    return (
        <div className='verifyOtp'>
            <form onSubmit={handleSubmit}>
                <h2 className='verifyOtp__header'>Verify Email</h2>
                <p className='verifyOtp__desc'>One Time Password OTP has been sent via<br></br> Email to {values.email}</p>
                {values.error && <p className='verifyOtp__error'>{values.error}</p>}
                <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                />
                {isVerified && (<p className='verifyOtp__Verified'>Email verified !.<a onClick={handleLogin} >Login Now ?</a></p>)}
                <div className='verifyOtp__timer'>
                    {timer > 0 ? (
                        <p>Time remaining: {formatTime(timer)}</p>
                    ) : (
                        <a onClick={handleResendOtp}>Resend OTP</a>
                    )}
                </div>
                <button className='verifyOtp__btn' type="submit">
                    Verify OTP
                </button>
            </form>
        </div>
    );
};

export default VerifyOtp;
