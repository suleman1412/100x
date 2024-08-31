# Persistent Todo App

This is a todo application built with Express.js that provides persistent storage using a JSON file.

## Features

- Create new todos
- Retrieve all todos
- Clear all todos
- Delete a specific todo
- Update a todo
- Mark a todo as completed
- Persistent storage using a JSON file

## Setup

1. Ensure you have Node.js installed on your system.
2. Navigate to the project directory.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the server:
   ```
   node persistent.js
   ```

The server will run on `http://localhost:3000`.

## API Endpoints

- `POST /`: Create a new todo
- `GET /`: Retrieve all todos
- `GET /clear`: Clear all todos
- `DELETE /:id`: Delete a specific todo
- `PUT /:id`: Update a specific todo
- `PATCH /:id`: Mark a todo as completed

## Persistent Storage

This version of the app uses a JSON file (`todos.json`) for persistent storage. Todos will be saved between server restarts.

## Note

Make sure the application has write permissions in the directory where `todos.json` will be created and updated.
