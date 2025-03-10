import express from 'express';
import dotenv from 'dotenv'; //dotenv is used to hide the mongodb url and other sensitive information

dotenv.config(); //this will load the .env file and we can use the variables in the .env file

const app =express();

//setup port 
 
app.get("/product",(req,res) =>{ //req = request, res = response "/" for home page . when localhost:5000 is called this will be executed and app.get is used to get the response from the server 
    // res.send("Server is ready"); //res.send is used to send response to the client 

    //beside of this we can create an database for this use mongodb

    //now we will connect to the database
    console.log(process.env.MONGODB_URL);//this will print the mongodb url in the console and we can use this url to connect to the database and we can use this url in the .env file as well 
})


app.listen(5000,()=>
    console.log('server is running at http://localhost:5000'));

//let setup mongodb
// we already have mongodb installed in our system
// we can use mongodb atlas as well


