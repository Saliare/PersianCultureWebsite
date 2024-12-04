
const webpush = require('web-push');

const publicVapidKey = 'your_public_vapid_key';
const privateVapidKey = 'your_private_vapid_key';

webpush.setVapidDetails(
    'mailto:your_email@example.com',
    publicVapidKey,
    privateVapidKey
);

app.post('/api/subscribe', (req, res) => {
    const subscription = req.body;

    res.status(201).json({});

    const payload = JSON.stringify({ title: 'New Program Available!' });

    webpush.sendNotification(subscription, payload).catch(error => console.error(error));
});
