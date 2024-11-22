// Require necessary packages
const express = require('express');
const path = require('path');

// Initialize the Express app
const app = express();

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON requests
app.use(express.json());

// Your routes or other configurations here
app.get('/', (req, res) => {
  res.send('Welcome to the Authentication System API!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
