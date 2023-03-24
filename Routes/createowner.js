const Owner=require('../models/Ownerdetails')


exports.addowner=async(req,res)=>
{
    let res = await Owner.create()
    res.status(201).json({data:result})
}