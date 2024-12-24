const express = require('express');
const router = express.Router();
const DBController = require('../controllers/DBController');


router.get('/db', DBController.connDB);

module.exports = router;
