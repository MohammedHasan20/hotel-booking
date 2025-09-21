// const {User}=require('../models/User');
// const Webhook=require('svix');


// const clerkWebhooks=async(req,res)=>{
//     try {
//         //create a six instance clerk webhook secret
//         const whook=new Webhook(process.env.CLERK_WEBHOOK_SECRET)


//         // Getting Headers
//         const headers={
//             // 
//             "svix-id":req.headers["svix-id"],
//             "svix-timestamp":req.headers["svix-timestamp"],
//             "svix-signature":req.headers["svix-signature"],

//         }

//         //verifying headers
//         await whook.verify(JSON.stringify(req.body),headers)


//         //Getting data from requrest body
//         const {data,type}=req.body

//         const userData={
//             _id:data.id,
//             email:data.email_addresses[0].email_address,
//             username:data.first_name+" "+data.last_name,
//             image:data.image_url,
//         }

//         // switch casesfor different events
//         switch(type){
//             case "user.created":{
//                 await User.create(userData);
//                 break;
//             }
//             case "user.updated":{
//                 await User.findByIdAndUpdate(data.id,userData);
//                 break;
//             }
//             case "user.deleted":{
//                 await User.findByIdAndUpdate(data.id);
//                 break;
//             }
//             default:
//                 break;
//         }

//         res.json({success:true,message:"Webhook Recieved"})

//     } catch (error) {
//         console.log(error.message);
//         res.json({success:false,message:error.message});
        
//     }
// }

// module.exports= { clerkWebhooks };
const {User}=require('../models/User');
const Webhook=require('svix');


const clerkWebhooks=async(req,res)=>{
    try {
        //create a six instance clerk webhook secret
        const whook=new Webhook(process.env.CLERK_WEBHOOK_SECRET)


        // Getting Headers
        const headers={
            // 
            "svix-id":req.headers["svix-id"],
            "svix-timestamp":req.headers["svix-timestamp"],
            "svix-signature":req.headers["svix-signature"],

        }

        //verifying headers
        await whook.verify(JSON.stringify(req.body),headers)


        //Getting data from requrest body
        const {data,type}=req.body

        const userData={
            _id:data.id,
            email:data.email_addresses[0].email_address,
            username:data.first_name+" "+data.last_name,
            image:data.image_url,
        }

        // switch casesfor different events
        switch(type){
            case "user.created":{
                await User.create(userData);
                break;
            }
            case "user.updated":{
                await User.findByIdAndUpdate(data.id,userData);
                break;
            }
            case "user.deleted":{
                // Corrected line for user deletion
                await User.findByIdAndDelete(data.id); 
                break;
            }
            default:
                break;
        }

        res.json({success:true,message:"Webhook Recieved"})

    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message});
        
    }
}

module.exports= { clerkWebhooks };