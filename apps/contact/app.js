const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); // Use cors middleware

app.post('/submit-form', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // ... your existing code to handle the form submission

    res.status(200).send('Form submitted successfully!');
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
