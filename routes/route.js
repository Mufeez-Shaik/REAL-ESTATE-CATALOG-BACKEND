const express = require('express');
const router = new express.Router;

const Property = require('../controllers/PrpertyControllers');
const getprop=require('../controllers/getpropdetails');

router.post('/property/basicinfo',Property.basicinfo);
router.patch('/property/props',Property.props);
router.post('/property/generalInfo',Property.generalInfo);
router.patch('/property/locationInfo',Property.locationInfo);
router.delete('/property/prevBasicInfo',Property.prevBasicInfo);
router.delete('/property/prevGenInfo',Property.prevGenInfo);

router.get('/property/propdetails',getprop.proplist);
router.get('/property/srchdetails',getprop.searchlist);
// router.get('/property/get',Property.get)

module.exports = router;