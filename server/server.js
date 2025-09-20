//Importing the for packages 

const express=require("express");
const dotenv=require('dotenv');
const cors=require('cors');
const connectDB=require("./config/db");
const clerkMiddleware=require('@clerk/express');
const { clerkWebhooks } = require("./controllers/clerkWebhooks");




//config to use the package
dotenv.config();

connectDB();

const app=express();

app.use(cors()); //enabel crossing origin sharing


// middleware 
app.use(express.json());
app.use(clerkMiddleware())


// api to listen to clerk webhook
app.use("/api/clerk", clerkWebhooks);



app.get("/",(req,res)=>{
    res.send("API IS WORKING PERFECTLY")
});

const PORT =process.env.PORT || 3000;
app.listen(PORT,()=>{

    console.log(`Server running on port ${PORT}`)
});

