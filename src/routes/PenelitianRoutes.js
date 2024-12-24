const express = require('express');
const router = express.Router();
const PenelitianController = require('../controllers/PenelitianController');

router.get('/penelitian', PenelitianController.getpenelitian);
router.post('/penelitian/insert', PenelitianController.insertpenelitian);
router.put('/penelitian/update/:kd_penelitian', PenelitianController.updatepenelitian);
router.delete('/penelitian/delete/:kd_penelitian', PenelitianController.deletepenelitian);
module.exports = router;



