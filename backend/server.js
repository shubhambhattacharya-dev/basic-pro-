import express from 'express';
import dotenv from 'dotenv'; // dotenv is used to hide the mongodb url and other sensitive information

dotenv.config(); // This loads the .env file so that you can use its variables

const app = express();

// Setup route for /product
app.get("/products", (req, res) => {
    res.send("Server is ready"); // Send response to the client
    console.log(process.env.MONGODB_URL); // Print the MongoDB URL from the .env file to the console
});

app.listen(5000, () =>
    console.log('Server is running at http://localhost:5000')
);
