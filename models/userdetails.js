const mongoose = require('mongoose');

const UserdetailsSchema = new mongoose.Schema(

{
    email:{ 
        type:String, required:true, unique:true
    },
    
    password:{
        type:String, required:true
    },

    userId:{
        type:String, required:true, unique:true
    }
},
{
    collection : "userInfo"
}
);
const User = mongoose.model("signin",UserdetailsSchema);
module.exports= User;