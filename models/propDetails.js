const mongoose=require('mongoose')

const propertySchema=new mongoose.Schema({
userId: String,
propertyType:String,
Price:Number,
propertyAge:Number,
Propertydescription:String,
 negotiable:Number,
 ownership : String,
 propertyApproved :String,
 bankLoan :Number,
 length : Number,
 breath : Number,
 totalArea : Number,
 areaunit : Number,
 bhk: Number,
 floor : Number,
 attached :String,
 westernToilet:Number,
 furnished :String,
 carParking:Number,
 lift :Number,
 electricity :String,
 facing: String

})

const Property=mongoose.model("Property",propertySchema);

module.exports=Property
