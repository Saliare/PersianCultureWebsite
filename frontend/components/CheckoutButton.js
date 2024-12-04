
import React, { useState } from 'react';

export default function CheckoutButton({ programId, amount }) {
    const [loading, setLoading] = useState(false);

    const handlePayment = async (method) => {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/payments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ method, amount, currency: 'USD' }),
        });
        const data = await response.json();
        setLoading(false);

        if (method === 'stripe' && data.clientSecret) {
            alert('Stripe payment initiated. Complete it to confirm.');
        } else if (method === 'paypal' && data.id) {
            alert(`PayPal payment initiated. Use this ID to confirm: ${data.id}`);
        } else {
            alert('Payment failed. Please try again.');
        }
    };

    return (
        <div>
            <button onClick={() => handlePayment('stripe')} disabled={loading}>
                Pay with Stripe
            </button>
            <button onClick={() => handlePayment('paypal')} disabled={loading}>
                Pay with PayPal
            </button>
        </div>
    );
}
