const express= require('express');
const router=express.Router();
const multer = require("multer");
const fs = require('fs');
const path = require('path');
const bcrypt = require("bcrypt");
const{sign} = require("jsonwebtoken");
const{isAuth} = require("../isAuth");
const User = require('../models/userdetails');

const storage = multer.diskStorage({
    destination: function(req,file,cb) { 
        cb(null,'upload-files')
    },
    filename: function(req,file,cb){
        cb(null , Date.now() + '-' + file.originalname)
    }
})

const upload = multer({storage: storage}).single('add_image');

router.post("/signup",async(req,res)=>{
    const {email,password} = req.body;
    const encryptedPassword = await bcrypt.hash(password, 8);
    const id = Math.floor(Math.random()*100)+"PPD"+Math.floor(Math.random()*1000);

    try{
        const existing = await User.findOne({email});
        if(existing){
            return res.send({status : "User alredy exists"})
        }
        await User.create({
            email:email,
            password:encryptedPassword,
            userId : id
         });
        res.send({status : "User Created"})
        
    }
    catch(error){
        res.send({status : "error"})
    }
})
router.post("/signin", async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
  
    const user = await user.findOne({ email });
    const userId = user.userId;
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    if(await bcrypt.compare(password,user.password)){
        const token= sign({userId}, process.env.JWT_SECRET);
        if(res.status(201)){
            return res.json({ status:"ok", token,user})
        }else{
            return res.json({ error:"err or" })
        }
    }
    res.json({status:"error", error:"Invalid password" })
});

module.exports = router;