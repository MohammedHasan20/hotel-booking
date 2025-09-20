// const mongoose=require('mongoose');


// const connectDB=async()=>{
//     try {

//         mongoose.connection.on("Connected",()=>console.log("database connected"));
//         await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`)
//     } catch (error) {
//         console.log(error.message);
        
//     }
// }

// export default connectDB

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        // Exit the process with failure
        process.exit(1);
    }
}

// Use module.exports for CommonJS
module.exports = connectDB;