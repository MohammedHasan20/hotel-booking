// 
const mongoose=require('mongoose');


const userSchema=mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","hotelOwner"],
        default:"user",
    },
    recentSearchCities:[{
        type:String,
        // The 'required: true' has been removed
    }],
},{timestamps: true});

const User=mongoose.model("User",userSchema);

module.exports={ User };