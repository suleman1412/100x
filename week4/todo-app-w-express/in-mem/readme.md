# In-Memory Todo App

This is a simple in-memory todo application built with Express.js. It provides basic CRUD operations for managing todos without persistent storage.

## Features

- Create new todos
- Retrieve all todos
- Clear all todos
- Delete a specific todo
- Update a todo
- Mark a todo as completed

## Setup

1. Ensure you have Node.js installed on your system.
2. Navigate to the project directory.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the server:
   ```
   node server.js
   ```

The server will run on `http://localhost:3000`.

## API Endpoints

- `POST /`: Create a new todo
- `GET /`: Retrieve all todos
- `GET /clear`: Clear all todos
- `DELETE /:id`: Delete a specific todo
- `PUT /:id`: Update a specific todo
- `PATCH /:id`: Mark a todo as completed

## Note

This version of the app uses in-memory storage. All todos will be lost when the server is restarted.