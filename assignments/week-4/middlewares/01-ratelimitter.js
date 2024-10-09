// You have to create a middleware for rate limiting a users request based on their username passed in the header

const express = require('express');
const app = express();

// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

app.use((req, res, next) => {

  let userId = req.headers['user-id']
  if(!userId){
    res.status(404).json({
      message: 'User-id not provided in the Headers'
    })
  }
  if(!numberOfRequestsForUser[userId]){
    numberOfRequestsForUser[userId] = 1
  }
  else{
    numberOfRequestsForUser[userId]++;
  }

  if(numberOfRequestsForUser[userId] > 5){
    res.status(404).json({message: "You're being rate limited, chill out"})
    return;
  }
  next()
})

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

// app.listen(3000, () => {
//   console.log('server running on Port 3000')
// })

module.exports = app;