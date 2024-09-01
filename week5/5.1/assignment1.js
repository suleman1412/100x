// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

const express = require('express')
app = express()


function log_reqs(req, res, next){
    method = req.method
    url = req.headers.host + req.url
    console.log(`${method} method invoked on ${url} at ${Date.now()}`)
    next()
}

app.use(log_reqs)

app.get('/',(req,res) => {
    res.send('<br>Hi</br>')
})

app.listen(3000)