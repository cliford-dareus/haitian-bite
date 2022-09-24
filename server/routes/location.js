const express = require('express');
const router = express.Router();
const { 
    getAllLocations, 
    createLocation, 
    getLocation 
} = require('../controller/location');

router.route('/').get(getAllLocations).post(createLocation);
router.route('/filter').get(getLocation);

module.exports = router;