```markdown
# Basic-Pro: Product Shop Website

Welcome to the Basic-Pro project! This is a beginner-friendly guide to building a product shop website where you can add and update products. This README will help you understand the project structure and development process.

## Project Overview

This project is a full-stack e-commerce platform with:

- Backend API built with Express.js and MongoDB
- Secure API endpoints for product management
- Frontend interface for product administration

## Day 1: Setting Up the Backend

Today we're focusing on building the API and implementing security measures.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- Basic understanding of JavaScript
- VS Code (recommended editor)

### Useful VS Code Shortcuts

- **Ctrl + J** - Toggle terminal
- **Ctrl + ~** - Open terminal
- **clear + Enter** - Clear terminal console

### Step-by-Step Setup

#### Create Project Structure

```
basic-pro/
├── backend/
│   └── (API files will go here)
├── frontend/
│   └── (UI files will go here)
├── package.json
└── .env
```

#### Initialize NPM

Navigate to the root folder:

```
cd basic-pro
```

Initialize npm:

```
npm init -y
```

This creates a package.json file that tracks all dependencies.

#### Install Core Dependencies

```
npm install express mongoose dotenv
```

- **Express**: Web framework for building APIs and routing
- **Mongoose**: Library for MongoDB interactions
- **dotenv**: Package to load environment variables from .env file

#### Environment Variables Setup

Create a `.env` file in the root directory. This will store sensitive information like:

- Database connection strings
- API keys
- Authentication secrets

Example `.env` file:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/product-shop
JWT_SECRET=your_secret_key
```

#### Project Structure Explanation

- **Backend/**: Contains API code, database models, and middleware
- **Frontend/**: Will contain UI components and assets
- **package.json**: Lists project dependencies and scripts
- **.env**: Stores environment variables (not committed to version control)
```

# backend folder
-server.js is for entry point of an api

for setup port :-

//setup port 

    app.listen(5000,()=>
    console.log('server is running on port 5000'));

    after this go to package.json 

    write :
    "dev": "location of this file/ node but after installing nodemon , its looklike  "nodemon backend/server.js":
    after this : use npm run dev 
     for the out put 


     for its not confinent for use :
     for this install a package : npm i nodemon -D
        make it a dev dependency :
         here in package.json file :-
         look like this - 
          "devDependencies": {
    "nodemon": "^3.1.9"
  }


  then changes you have to done :



//when i change anything it will restart agin and agin 

# day 2

today we are woking on setup local host 

app.get("/",(req,res) =>{
    res.send("Server is ready");
})
#  //req = request, res = response "/" for home page . when localhost:5000 is called this will be executed and app.get is used to get the response from the server  , //res.send is used to send response to the client 

