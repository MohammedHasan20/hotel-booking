// //Importing the for packages 


// const express=require("express");
// const dotenv=require('dotenv');
// const cors=require('cors');
// const connectDB=require("./config/db");
// const {clerkMiddleware}=require('@clerk/express');
// const { clerkWebhooks } = require("./controllers/clerkWebhooks");




// //config to use the package
// dotenv.config();

// connectDB();

// const app=express();

// app.use(cors()); //enabel crossing origin sharing


// // middleware 
// app.use(express.json());
// app.use(clerkMiddleware())


// // api to listen to clerk webhook
// // This is because Clerk sends a POST request to your webhook endpoint
// app.post("/api/clerk", clerkWebhooks);



// app.get("/",(req,res)=>{
//     res.send("API IS WORKING PERFECTLY")
// });

// const PORT =process.env.PORT || 3000;
// app.listen(PORT,()=>{

//     console.log(`Server running on port ${PORT}`)
// });

// Importing packages
// const express = require("express");
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require("./config/db");
// const { clerkMiddleware } = require('@clerk/express');

const express=require("express");
const dotenv=require('dotenv');
const cors=require('cors');
const connectDB=require("./config/db");
const {clerkMiddleware}=require('@clerk/express');
const { clerkWebhooks } = require("./controllers/clerkWebhooks");

// Config to use the packages
dotenv.config();

// Connect to the database
connectDB();

const app = express();

app.use(cors()); // Enable cross-origin sharing

// Webhook endpoint with a specific raw body parser
// This must come before the general express.json() middleware
app.post("/api/clerk", express.raw({ type: 'application/json' }), clerkWebhooks);

// General middleware for all other routes
app.use(express.json());
app.use(clerkMiddleware());

// General API route
app.get("/", (req, res) => {
    res.send("API IS WORKING PERFECTLY");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});