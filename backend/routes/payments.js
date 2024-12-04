
const axios = require('axios');

// Payment Route
app.post('/api/payments', async (req, res) => {
    const { method, amount, currency } = req.body;

    try {
        if (method === 'stripe') {
            // Stripe Payment (already implemented)
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount * 100,
                currency,
                payment_method_types: ['card'],
            });
            res.json({ clientSecret: paymentIntent.client_secret });
        } else if (method === 'paypal') {
            // PayPal Payment (already implemented)
            const request = new paypal.orders.OrdersCreateRequest();
            request.requestBody({
                intent: 'CAPTURE',
                purchase_units: [{
                    amount: { currency_code: currency, value: amount.toString() },
                }],
            });
            const response = await payPalClient.execute(request);
            res.json({ id: response.result.id });
        } else if (method === 'zarinpal') {
            // ZarinPal Payment
            const response = await axios.post('https://api.zarinpal.com/pg/v4/payment/request.json', {
                merchant_id: 'your_zarinpal_merchant_id',
                amount: amount,
                callback_url: 'http://localhost:5000/callback',
                description: 'Persian Language Program Payment',
            });
            if (response.data.data && response.data.data.code === 100) {
                res.json({ authority: response.data.data.authority });
            } else {
                throw new Error('ZarinPal payment failed');
            }
        } else if (method === 'zaincash') {
            // ZainCash Payment (mock implementation)
            const paymentId = `ZAINCASH-${Date.now()}`;
            res.json({ paymentId });
        } else {
            res.status(400).json({ error: 'Unsupported payment method' });
        }
    } catch (error) {
        console.error('Payment Error:', error);
        res.status(500).json({ error: 'Payment processing failed' });
    }
});
