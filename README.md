# User Registration and Login Form with MongoDB Integration
## Overview
This repository contains code for a user registration form with login functionality. The form data is stored in MongoDB, and the application allows users to register for a new account or log in if they already have one.
## Features
- User registration form with fields such as username, email, password, etc.
- Login form for users who are already registered.
- MongoDB integration for storing and fetching user data.
- Password hashing for secure storage.
- Frontend validation for form inputs.
- Error handling for registration and login processes.
## Technologies Used
### Node.js
  - Node.js can interact with MongoDB (or any other database) through packages like Mongoose. Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward way to interact with MongoDB databases.
### Express.js
  - Express.js simplifies the process of defining routes for handling various HTTP requests. Routes are defined using HTTP methods like GET, POST, PUT, DELETE, etc., and URLs. Each route can have one or more handler functions, which are executed when the route is matched.
### MongoDB
  - MongoDB stores data in a flexible, JSON-like format called BSON (Binary JSON). In the context of your project, MongoDB would likely be used to store user data such as usernames, emails, passwords (hashed for security), and any other relevant information.
### HTML
  - HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications. In the context of your project, HTML would be used to create the user interface (UI) for the registration form, login form, and any other pages or components required for the application
### CSS
  - CSS is used to style HTML elements such as text, backgrounds, borders, margins, padding, fonts, colors, and more. You can use CSS properties like color, background-color, font-family, font-size, padding, margin, border, etc., to customize the appearance of elements.
### Javascript
  - JavaScript is a versatile programming language commonly used in web development for adding interactivity and dynamic behavior to web pages. In your project, JavaScript would likely be used for client-side validation, handling user interactions, making asynchronous requests to the server (e.g., AJAX), and performing other tasks that require client-side scripting.
## Installation
- Clone the repository: git clone https://github.com/Nithish-Kanagaraj/User-Registration-Form
- Install dependencies: npm install
- Set up MongoDB and configure connection details in config.js.
- Start the server: npm start
