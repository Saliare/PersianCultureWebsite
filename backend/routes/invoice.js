
const nodemailer = require('nodemailer');

app.post('/api/invoice', async (req, res) => {
    const { email, amount, programName } = req.body;
    
    // Mock Invoice Generation
    const invoiceId = `INV-${Date.now()}`;

    // Send Email Notification (mock setup)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your_email@gmail.com',
            pass: 'your_password',
        },
    });

    const mailOptions = {
        from: 'your_email@gmail.com',
        to: email,
        subject: `Invoice for ${programName}`,
        text: `Thank you for your payment. Invoice ID: ${invoiceId}, Amount: ${amount}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ status: 'success', invoiceId });
    } catch (error) {
        console.error('Email Error:', error);
        res.status(500).json({ error: 'Invoice email failed' });
    }
});
