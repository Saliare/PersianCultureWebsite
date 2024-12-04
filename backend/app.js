require('dotenv').config();
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
console.log(`Stripe Secret Key: ${stripeSecretKey}`);
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Mock Data
const programs = [
    {
        id: 1,
        title: 'Beginner Persian Language Program',
        description: 'An introductory course for learning Persian.',
        price: 100,
        level: 'Beginner',
    },
    {
        id: 2,
        title: 'Intermediate Persian Language Program',
        description: 'Enhance your Persian skills with cultural immersion.',
        price: 200,
        level: 'Intermediate',
    },
    {
        id: 3,
        title: 'Advanced Persian Language Program',
        description: 'Master Persian with advanced lessons and poetry.',
        price: 300,
        level: 'Advanced',
    },
];

const testimonials = [
    { name: 'Ahmed', comment: 'The best Persian language program I have ever joined!' },
    { name: 'Sarah', comment: 'I now understand Persian poetry deeply.' },
];

// Routes
app.get('/api/programs', (req, res) => {
    res.json(programs);
});

app.get('/api/testimonials', (req, res) => {
    res.json(testimonials);
});

app.post('/api/payments', (req, res) => {
    const { programId, paymentDetails } = req.body;
    if (programId && paymentDetails) {
        res.json({ status: 'success', message: 'Payment processed successfully.' });
    } else {
        res.status(400).json({ status: 'error', message: 'Invalid payment details.' });
    }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
