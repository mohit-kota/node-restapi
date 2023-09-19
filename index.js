const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Route for POST method
app.post('/bfhl', (req, res) => {
  const inputData = req.body.data;

  if (!Array.isArray(inputData)) {
    return res.status(400).json({ error: 'Invalid input data format. Expected an array.' });
  }

  const userId = 'john_doe_17091999'; // Replace with your logic
  const email = 'john@xyz.com'; // Replace with your logic
  const rollNumber = 'ABCD123'; // Replace with your logic

  // Filter numbers and alphabets
  const numbers = inputData.filter(item => !isNaN(item));
  const alphabets = inputData.filter(item => isNaN(item));

  // Find the highest alphabet
  const highestAlphabet = alphabets.length > 0 ? [alphabets.sort()[alphabets.length - 1]] : [];

  const response = {
    is_success: true,
    user_id: userId,
    email: email,
    roll_number: rollNumber,
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: highestAlphabet,
  };

  res.json(response);
});

// Route for GET method
app.get('/bfhl', (req, res) => {
  // Hardcoded response for the GET endpoint
  const response = {
    operation_code: 1,
  };

  res.status(200).json(response);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
