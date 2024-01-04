const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const nodemailer = require('nodemailer');

app.use(bodyParser.json());

app.post('/submit-form', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Set up nodemailer transport
    const transporter = nodemailer.createTransport({
    //   pull service from .env file
      service: process.env.EMAIL_SERVICE,
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email details
    const mailOptions = {
      from: process.env.MAIL_FROM_ADDRESS,
      to: process.env.MAIL_TO_ADDRESS,
      subject: 'CyberWorld Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).send('Form submitted successfully!');
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
