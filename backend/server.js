import express from 'express';


const app =express();

//setup port 


app.listen(5000,()=>
    console.log('server is running at http://localhost:5000'));