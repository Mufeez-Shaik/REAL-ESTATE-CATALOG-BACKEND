const express = require('express');
const router = new express.Router;
const Property = require('../controllers/PrpertyControllers');


router.post('/property/basicinfo',Property.basicinfo);
router.patch('/property/props',Property.props);
router.post('/property/generalInfo',Property.generalInfo);
router.patch('/property/locationInfo',Property.locationInfo);

module.exports = router;