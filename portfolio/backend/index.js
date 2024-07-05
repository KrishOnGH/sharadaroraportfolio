// backend/index.js

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors package

const app = express();
const PORT = 3002; // Choose any port you like

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to handle form submission
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter using SMTP
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'portfoliowebsiteform@gmail.com',
            pass: 'idwg cwec zimf pmwb'
        }
    });

    try {
        // Send mail with defined transport object
        let info = await transporter.sendMail({
            from: `"Portfolio Website" <portfoliowebsiteform@gmail.com>`,
            to: 'hi.sharad.arora@gmail.com',
            subject: 'New Message from Portfolio Website',
            text: `You got a message from ${name}! \n\nDetails: \n\nEmail: ${email} \n\nMessage: ${message}`
        });

        console.log('Message sent: %s', info.messageId);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ error: 'Failed to send email.' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
