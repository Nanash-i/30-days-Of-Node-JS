const express = require('express');
const bodyParser = require('body-parser');
const authenticateToken = require('./authMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Sample protected route
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Day11 of Node Js Challenge' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
