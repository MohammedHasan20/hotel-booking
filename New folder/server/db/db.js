

const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config(); // to reade the env file

const connectDB =async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("MongoDb Connected Successfully");
    }catch(err){
        console.error("MongoDb Connection Failed ", err.message);
        process.exit(1);
    }
}
module.exports=connectDB;