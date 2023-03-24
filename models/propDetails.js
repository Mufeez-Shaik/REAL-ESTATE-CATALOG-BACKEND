const mongoose=require('mongoose')

const propertySchema=new mongoose.Schema({
ppdId : string,
propertyType:String,
Price:Number,
propertyAge:Number,
Propertydescription:String,
 negotiable:Number,
 ownership : String,
 propertyApproved : string,
 bankLoan :string,

 length : Number,
 breath : Number,
 totalArea : Number,
 areaunit : string,
 bhk: string,
 floor : Number,
 attached :string,
 westernToilet:string,
 furnished :string,
 carParking:string,
 lift :string,
 electricity :string,
 facing: string,git 

})

const Property=mongoose.model("Property",propertySchema);

module.exports=Property
