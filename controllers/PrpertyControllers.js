const Property = require("../models/propDetails");
const Owner = require("../models/ownerDetails");

module.exports = {
  basicinfo: async (req, resp) => {
    try {
      const {
        userId,
        propertyType,
        Price,
        propertyAge,
        Propertydescription,
        negotiable,
        ownership,
        propertyApproved,
        bankLoan,
      } = req.body;
      console.log(req.body);

      const property = await Property.create({
        userId,
        propertyType,
        Price,
        propertyAge,
        Propertydescription,
        negotiable,
        ownership,
        propertyApproved,
        bankLoan,
      });

      return resp.send(property);
    } catch (e) {
      return resp.send(e.message);
      console.log(e.message);
    }
  },

  props: async (req, resp) => {
    try {
      const {
        length,
        breath,
        totalArea,
        areaunit,
        bhk,
        floor,
        attached,
        westernToilet,
        furnished,
        carParking,
        lift,
        electricity,
        facing,
      } = req.body;
      console.log(req.body);


      const props = await Property.findByIdAndUpdate(req.body._id, {
        length,
        breath,
        totalArea,
        areaunit,
        bhk,
        floor,
        attached,
        westernToilet,
        furnished,
        carParking,
        lift,
        electricity,
        facing,
      },{new:true}
//       function (err, docs) {
// if (err){
// console.log(err)
// }
// else{
// console.log("Updated User : ", docs);
// }
// }
);


      return resp.send(props);
    } catch (e) {
      return resp.send(e.message);
      console.log(e.message);
    }
  },

  generalInfo: async (req, resp) => {
    try {
      const {
        commonId,
        ppdId,
        name,
        mobil,
        postedBy,
        saleType,
        featuredpckg,
        dppdpckg,
      } = req.body;
      const generalInfo = await Owner.create({
        commonId,
        ppdId,
        name,
        mobil,
        postedBy,
        saleType,
        featuredpckg,
        dppdpckg,
      });

      return resp.send(generalInfo);
    } catch (e) {
      return resp.send(e.message);
      console.log(e.message);
    }
  },

  prevBasicInfo: async (req, resp) => {
    try {
      
       await Property.findByIdAndDelete(req.body._id);
       

      return resp.send(dataCleared);
    } catch (e) {
      return resp.send(e.message);
      console.log(e.message);
    }
  },

  prevGenInfo: async (req, resp) => {
    try {
      
       await Owner.findByIdAndDelete(req.body._id);
       

      return resp.send(dataCleared);
    } catch (e) {
      return resp.send(e.message);
      console.log(e.message);
    }
  },





  locationInfo: async (req, resp) => {
    try {
      const {
        email,
        city,
        area,
        pincod,
        address,
        landmark,
        lattitud,
        longitude,
      } = req.body;
      console.log(req.body);

      const locationInfo = await Property.findByIdAndUpdate(req.body._id, {
        email,
        city,
        area,
        pincod,
        address,
        landmark,
        lattitud,
        longitude,
      },{new:true}
//       function (err, docs) {
// if (err){
// console.log(err)
// }
// else{
// console.log("Updated User : ", docs);
// }
// }
);

      return resp.send(locationInfo);
    } catch (e) {
      return resp.send(e.message);
      console.log(e.message);
    }
  },
};
