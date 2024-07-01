import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { useLocation } from 'react-router-dom';
import './Payment.css'


const Payment = () => {
  const location = useLocation();
  const { price } = location.state || { amount: 0 };

  let {authTokens } = useContext(AuthContext);
  const [amount, setAmount] = useState(parseInt(price));

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    const config = {
        headers: { Authorization: `Bearer ${authTokens.access}` }
      };

    const { data: orderData } = await axios.post('http://localhost:8000/api/accounts/create_order/', { amount },config);

    const options = {
      key: orderData.key,
      amount: orderData.amount * 100,
      currency: orderData.currency,
      name: orderData.name,
      description: orderData.description,
      order_id: orderData.order_id,
      handler: async function (response) {
        const paymentData = {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        };

        const result = await axios.post('http://localhost:8000/api/accounts/verify_payment/', paymentData,config);
        alert(result.data.status);
      },
      prefill: {
        name: "Your Name",
        email: "your.email@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Some address",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className='payment'>
      <h2 className='payment__heading'>Payment Page</h2>
      <h5 className='payment__info'>{amount}/-</h5>
      <button className='payment__info-btn' onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;
