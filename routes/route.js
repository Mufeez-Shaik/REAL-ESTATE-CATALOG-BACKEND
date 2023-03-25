const express = require('express');
const router = new express.Router;
const Property = require('../controllers/PrpertyControllers')


router.post('/property/create',Property.create)
router.post('/property/create2',Property.create2)
// router.get('/property/get',Property.get)

module.exports = router