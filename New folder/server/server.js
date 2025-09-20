



const express=require('express');

const connectDB=require('./db/db');

const cookieParser=require('cookie-parser');
const cors=require('cors');




// create a database connection ->u can also 
//crete a separate file for this and then impor/use that file here

connectDB();


const app=express();
const PORT=process.env.PORT || 5000;




app.use(
    cors({
        origin:"http://localhost:5173",
        methods:["GET","POST","PUT","DELETE"],
        allowedHeaders:[
            "Content-Type","Authorization","Cache-Control","Expires","Pragma"
        ],

        credentials:true
    })
);
app.use(express.json());
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('Api is running...');

});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
