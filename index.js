const mongoose = require("mongoose");
const express = require("express");
const app = express();
const connstr = "mongodb+srv://mufeez:zojFpzcqRhVC5YzA@cluster0.mt64wqa.mongodb.net/?retryWrites=true&w=majority"


const connect = mongoose.connect(connstr,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("connected")}).catch((e)=>{console.log(e.message)})

app.listen(8080,()=>{
    console.log("server connected")
})
