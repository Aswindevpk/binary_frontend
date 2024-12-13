import React from "react";

const PaymentFailed = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
        <div className="text-red-600 text-5xl mb-5">&#10007;</div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Payment Failed
        </h1>
        <p className="text-gray-600 mb-5">
          We're sorry, but your transaction could not be completed.
        </p>
        <div className="text-gray-700 mb-5">
          <p>
            <strong>Transaction ID:</strong> 1234567890
          </p>
          <p>
            <strong>Amount:</strong> $50.00
          </p>
        </div>
        <button
          className="bg-red-600 text-white py-2 px-4 rounded-md text-lg transition duration-300 hover:bg-red-700"
          onClick={() => (window.location.href = "/plans")}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default PaymentFailed;
