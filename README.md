# Node.js Authentication System  

This repository contains a **Node.js-based authentication system** integrated with a **MySQL database**. It features **secure user registration and login functionality**. The project is designed to provide a **full-stack authentication system** with both backend and frontend implementations.  

## Features  
- **User Registration**: Securely register new users with validation for name, email, and password.  
- **User Login**: Authenticate users with hashed passwords and JWT (JSON Web Tokens) for secure session management.  
- **Password Encryption**: Passwords are encrypted using `bcrypt` for enhanced security.  
- **Frontend Integration**: Includes a responsive frontend built with **HTML, CSS, and JavaScript**, connected to the backend API.  
- **MySQL Database**: Stores user data, including hashed passwords, ensuring data persistence and security.  
- **Environment Variables**: Uses `dotenv` to manage sensitive credentials like database connection details.  

## Tech Stack  
- **Backend**: Node.js, Express.js  
- **Frontend**: HTML5, CSS3, Vanilla JavaScript  
- **Database**: MySQL  
- **Libraries/Tools**:  
  - `bcrypt` for password hashing  
  - `jsonwebtoken` for session tokens  
  - `dotenv` for environment variable management  
  - `nodemon` for development workflow  

## Getting Started  

### Prerequisites  
- Node.js and npm installed  
- MySQL database server setup (e.g., using XAMPP or MySQL Workbench)  

### Setup Instructions  
1. Clone this repository:  
   ```bash  
   git clone https://github.com/yourusername/node-authentication-system.git  

 
2. Navigate to the project directory:  
   ```bash  
   cd node-authentication-system       
3. Install dependencies:  
   ```bash  
   npm install  
  
4. Configure environment variables in a .env file:  
   ```bash  
   DB_HOST=your_database_host  
   DB_USER=your_database_user  
   DB_PASSWORD=your_database_password  
   DB_NAME=your_database_name  
   PORT=3000  
   JWT_SECRET=your_jwt_secret  
   
5. Initialise the database with provided sql script:  
   ```bash  
   CREATE DATABASE authentication_db;  
   USE authentication_db;  
   CREATE TABLE users (  
      id INT AUTO_INCREMENT PRIMARY KEY,  
      name VARCHAR(255),  
      email VARCHAR(255) UNIQUE,  
      password VARCHAR(255)  
   );  
   
6. Run the project:  
   ```bash  
   nodemon index.js

   ### Access the Application  
 7.Access the application at:  
[http://localhost:3000](http://localhost:3000)  

### Usage  

#### Frontend:  
- Navigate to `/register.html` to register a new user.  
- Navigate to `/login.html` to authenticate an existing user.  

#### Backend:  
- `POST /register` for user registration.  
- `POST /login` for user authentication.  


   

   

   




 
  

