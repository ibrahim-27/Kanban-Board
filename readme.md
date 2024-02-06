# Kanban Board

A Kanban board application built using the MERN stack with JWT authentication.

## Description

This project is a Kanban board application designed to help users manage their tasks efficiently. It allows users to create, update, and delete tasks, organize them into different columns (e.g., Backlog, In Progress, Completed), and assign tags to categorize tasks.

## Features

- User authentication using JWT (JSON Web Tokens)
- Multiple boards for organizing tasks (e.g., Backlog, In Progress, Completed)
- Drag and drop functionality for task management
- Responsive design for desktop and mobile devices

## Technologies Used

- MongoDB: A NoSQL database used for storing user data, projects, and tasks.
- Express.js: A Node.js web application framework used for building the backend REST APIs.
- React.js: A JavaScript library used for building the frontend user interface.
- Node.js: A JavaScript runtime environment used for running the server-side code.
- JWT: JSON Web Tokens used for authentication and authorization.
- Tailwind CSS: A utility-first CSS framework used for styling the user interface.
- DnD Kit: A library used for implementing drag and drop functionality.

## Getting Started

1.  **Clone the repository:**

    ```
    git clone https://github.com/ibrahim-27/Kanban-Board.git
    ```

2.  **Setup environment variables (backend)**
    ```
    DB_CONNECT = 'YOUR MONGODB URL'
    PORT = 0000
    SECRET_KEY = 'YOUR SECRET'
    ```

3.  **Run backend server**
    ```
    cd backend
    npm install
    node index.js
    ```
4.  **Run frontend**
    ```
    cd app
    npm install
    npm run dev
    ```
5. **Open Browser**
    ```
    http://localhost:3000
    ```
