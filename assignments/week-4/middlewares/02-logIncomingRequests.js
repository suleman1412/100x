//  Create a middleware that logs all incoming requests to the console.

const express = require('express');
const app = express();

function logRequests(req, res, next) {
    // write the logic for request log here
    console.log(`/${req.method} ${req.path} - ${new Date().toISOString()}`)
    next()
}

app.use(logRequests);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

app.post('/',(req, res) => {
    res.status(404).json({
        message: "Hello, world!"
    });
})

app.listen(3000, () => {
    console.log("Server on port 3000")
})

module.exports = app;
