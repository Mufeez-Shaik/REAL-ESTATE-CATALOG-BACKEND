
const express= require('express');
const route=express.Router();
const userInfo = require("../models/userdetails");

router.post("/signup",async(req,res)=>{
    

})

exports.addemployee=async(req,res)=>
{
    let result = await Employee.create(req.body)
    res.status(201).json({data:result})
}