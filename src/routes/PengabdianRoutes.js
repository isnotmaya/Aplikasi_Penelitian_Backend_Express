const express = require('express');
const router = express.Router();
const PengabdianController = require('../controllers/PengabdianController');

router.get('/pengabdian', PengabdianController.getpengabdian);
router.post('/pengabdian/insert', PengabdianController.insertpengabdian);
router.put('/pengabdian/update/:kd_pengabdian', PengabdianController.updatepengabdian);
router.delete('/pengabdian/delete/:kd_pengabdian', PengabdianController.deletepengabdian);
module.exports = router;



