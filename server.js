const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/contact', (req, res) => {
    const { Name, Email, Message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'vtu18961@veltech.edu.in',     // Replace with your email
            pass: '999107201018961'       // Replace with your email password
        }
    });

    const mailOptions = {
        from: Email,
        to: 'yanalashivareddy7@gmail.com',          // Where you want to receive messages
        subject: `Contact Form Submission from ${Name}`,
        text: Message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending message');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Message sent successfully');
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
