const express = require('express');
const router = new express.Router;
const Property = require('../controllers/proplistcont')


router.get('/property/proplist',Property.proplist);

router.get('/property/searchlist',Property.searchlist);

module.exports = router

