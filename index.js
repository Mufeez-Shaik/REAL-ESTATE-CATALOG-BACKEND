const express = require("express");
const mongoose = require("mongoose");
const bodyParser  = require('body-parser')
const app = express();
const connstr = "mongodb+srv://mufeez:zojFpzcqRhVC5YzA@cluster0.mt64wqa.mongodb.net/?retryWrites=true&w=majority"
const anyroutes = require('./routes/route');
const port = 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

 mongoose.connect(connstr,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("connected")}).catch((e)=>{console.log(e.message)});

// app.use(require('./routes/route'));
app.use(anyroutes)

app.listen(port,()=>{
    console.log("server connected");
})
