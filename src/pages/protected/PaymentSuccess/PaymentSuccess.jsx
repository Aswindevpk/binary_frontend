import React from 'react';
import './PaymentSuccess.css'; // Import the CSS file for styling

const PaymentSuccess = () => {
    return (
        <div className="payment-success-container">
            <div className="payment-success-card">
                <div className="success-icon">&#10003;</div>
                <h1>Payment Successful!</h1>
                <p>Thank you for your payment. Your transaction has been completed successfully.</p>
                <div className="transaction-details">
                    <p><strong>Transaction ID:</strong> 1234567890</p>
                    <p><strong>Amount:</strong> $50.00</p>
                </div>
                <button className="go-home-button" onClick={() => window.location.href = '/'}>Go to Homepage</button>
            </div>
        </div>
    );
};

export default PaymentSuccess;
