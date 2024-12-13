import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "@services/api";

const Payment = () => {
  const [user,setUser] = useState(null)
  const location = useLocation();
  const navigate = useNavigate();
  const { price } = location.state || { amount: 0 };
  const [amount, setAmount] = useState(parseInt(price));

  const fetchUser = async () => {
    try {
      const response = await api.get("/accounts/profile/");
      const fetchedUser = response.data;
      setUser(fetchedUser);
    } catch (error) {
      console.error("There was an error fetching the tags!", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    const { data: orderData } = await api.post("/accounts/create_order/", {
      amount: amount,
    });

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

        try {
          const result = await api.post(
            "/accounts/verify_payment/",
            paymentData
          );
          if (result.status === 200) {
            navigate("/payment-success");
          }
        } catch (error) {
          navigate("/payment-failed");
        }
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

  
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center pt-20 font-sans w-[50%] m-auto">
      <h2 className="text-2xl text-center font-sans text-primary pb-2 font-medium mb-4">
        Payment
      </h2>
      <div className="p-4 bg-neutral text-center w-full  mb-4">
        <p className="text-sm">You are signed up with {user.email}</p>
      </div>
      <h5 className="text-sm text-center">{amount}/-</h5>
      <button
        className="mt-4 bg-primary text-white py-2 px-4 rounded-md transition duration-300 hover:bg-primary-dark w-[200px]"
        onClick={handlePayment}
      >
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
