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

// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`);
//         console.log("Database connected successfully");
//     } catch (error) {
//         console.error("Database connection failed:", error.message);
//         // Exit the process with failure
//         process.exit(1);
//     }
// }
// Example of how you could enhance it
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`);
        console.log("Database connected successfully");

        // Optional: Add event listeners for connection status
        mongoose.connection.on('error', (err) => {
            console.error(`Mongoose connection error: ${err.message}`);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose disconnected from DB');
        });
        
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;

// Use module.exports for CommonJS
// module.exports = connectDB;