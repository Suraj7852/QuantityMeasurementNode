const express = require('express');
const controller = require('../public/javascripts/controller/QuantityMeasurementController');
const router = express.Router();

/* GET home page. */
router.get('/convert',controller.converterController);

module.exports = router;
