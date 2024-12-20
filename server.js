// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Example Route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
