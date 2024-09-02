import React from 'react';
import './PaymentFailed.css'; // Import the CSS file for styling

const PaymentFailed = () => {
    return (
        <div className="payment-failed-container">
            <div className="payment-failed-card">
                <div className="failed-icon">&#10007;</div>
                <h1>Payment Failed</h1>
                <p>We're sorry, but your transaction could not be completed.</p>
                <div className="transaction-details">
                    <p><strong>Transaction ID:</strong> 1234567890</p>
                    <p><strong>Amount:</strong> $50.00</p>
                </div>
                <button className="try-again-button" onClick={() => window.location.href = '/plans'}>Try Again</button>
            </div>
        </div>
    );
};

export default PaymentFailed;
