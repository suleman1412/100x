// Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it

const express = require('express')
app = express()

let count = 0;
function incrementRequests(req,res,next){
    count++;
    next();
}

app.use(incrementRequests)

app.get('/', (req,res) => {
    res.send('Hi this is the landing page')
})

app.get('/analytics', (req, res) => {
    res.json(count)
})

app.listen(3000, () => {
    console.log('server running on port 3000')
})