const mongoose=require('mongoose')
const Property = require('../models/propDetails')

const ownerSchema=new mongoose.Schema({
    commonId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Property'
    },
    ppdId :String,
    name:String,
    mobile:Number,
    postedBy:String,
    saleType:String,
    featuredpckg: Number,
    dppdpckg: Date,
    img:Object,
    email:String,
    city:String,
    area:String,
    pincode:Number,
    address:String,
    landmark:String,
    lattitude:Number,
longitude:Number
}
)

const Owner=mongoose.model('Owner',ownerSchema);

module.exports=Owner