const mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost:27017/signin-details").then(()=>{
    console.log("connection is successful");

}).catch(()=>{
    console.log("No COnnection");
})