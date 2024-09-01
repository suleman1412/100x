# Request Logger Middleware

This Express.js application demonstrates a simple middleware function that logs incoming HTTP requests.

## Features

- Logs each request's HTTP method, URL, and timestamp to the console
- Includes a sample route to test the middleware

## Usage

1. Install dependencies: `npm install express`
2. Run the server: `node assignment1.js`
3. Send requests to `http://localhost:3000` and observe the console output

The middleware will log details of each incoming request before processing it.

# Request Counter Middleware

This Express.js application implements a middleware to count total requests and an endpoint to expose the count.

## Features

- Middleware that increments a counter for each incoming request
- `/analytics` endpoint that returns the total request count

## Usage

1. Install dependencies: `npm install express`
2. Run the server: `node assignment2.js`
3. Send requests to various endpoints on `http://localhost:3000`
4. Check the total request count at `http://localhost:3000/analytics`
