// jwtUtils.js
const jwt = require('jsonwebtoken');

// Secret key for JWT
const JWT_SECRET_KEY = 'Dattebayo';

const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET_KEY);
};

const verifyToken = (token, callback) => {
    jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return callback(err);
        }
        callback(null, decoded);
    });
};

module.exports = {
    generateToken,
    verifyToken
};
