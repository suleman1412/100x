const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET
function userMiddleware(req, res, next) {
    // Implement user auth logic
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Failed to authenticate token" });
        }
        
        req.body.userId = decoded.email; 
        next(); 
    });
}

module.exports = userMiddleware;