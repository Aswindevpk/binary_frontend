import React from "react";
import {Button} from "@components/ui";

const PaymentSuccess = () => {
  return (
    <div className="flex items-center justify-center font-sans">
      <div className="bg-white p-8 mt-20 text-center max-w-sm w-full">
        <div className="text-green-500 text-5xl mb-5">&#10003;</div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Payment Successful!
        </h1>
        <p className="text-secondary mb-5">
          Thank you for your payment. Your transaction has been completed
          successfully.
        </p>
        <div className="text-gray-700 mb-5">
          <p>
            <strong>Transaction ID:</strong> 1234567890
          </p>
          <p>
            <strong>Amount:</strong> $50.00
          </p>
        </div>
        <Button onClick={()=>{}}>
          Go to Home Page
        </Button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
