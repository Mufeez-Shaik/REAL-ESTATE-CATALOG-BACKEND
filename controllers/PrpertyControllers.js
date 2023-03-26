const Property = require('../models/propDetails');
const Owner = require('../models/ownerDetails')


module.exports = {
    create: async(req,resp) =>{
        try{
const {
userId,
propertyType ,
Price ,
propertyAge ,
Propertydescription ,
 negotiable ,
 ownership   ,
 propertyApproved ,
 bankLoan  ,
 length   ,
 breath   ,
 totalArea ,
 areaunit   ,
 bhk ,
 floor,
 attached  ,
 westernToilet,
 furnished ,
 carParking,
 lift  ,
 electricity,
 facing  
        } =req.body;
console.log(req.body);
            const property = await Property.create({
                
                userId,
                propertyType ,
                Price ,
                propertyAge ,
                Propertydescription ,
                 negotiable ,
                 ownership   ,
                 propertyApproved ,
                 bankLoan  ,
                 length   ,
                 breath   ,
                 totalArea ,
                 areaunit   ,
                 bhk ,
                 floor,
                 attached  ,
                 westernToilet,
                 furnished ,
                 carParking,
                 lift  ,
                 electricity,
                 facing});

              
            return resp.send(property)}
            catch(e) {
                return resp.send(e.message)
                console.log(e.message)

            }
               
            
      
    },
    create2: async(req,resp) =>{
        try {const {
            
                commonId,
                ppdId ,
                name,
                mobil,
                postedBy,
                saleType,
                featuredpckg,
                dppdpckg,
                img,
                email,
                city,
                area,
                pincod,
                address,
                landmark,
                lattitud,
            longitude
            
        } =req.body;
            const property = await Owner.create({

                commonId,
                ppdId ,
                name,
                mobil,
                postedBy,
                saleType,
                featuredpckg,
                dppdpckg,
                img,
                email,
                city,
                area,
                pincod,
                address,
                landmark,
                lattitud,
            longitude
            })
            
            return resp.send(property)}
            catch(e) {
                return resp.send(e.message)
                console.log(e.message)

            }
    },

}



//     get: async(req,resp)=>{
//         resp.send("hi")
//     }
