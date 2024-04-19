// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Define a route handler for the GET / endpoint
app.get('/', (req, res) => {
  // Send the response "Hi" to the client
  res.send('Hi');
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
