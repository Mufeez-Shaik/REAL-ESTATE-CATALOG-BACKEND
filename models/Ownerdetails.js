const mongoose=require('mongoose')

const ownerSchema=new mongoose.Schema({
    ppdid:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Property'
    },
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