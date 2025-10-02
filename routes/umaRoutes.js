// routes/umaRoutes.js
const express = require('express');
const router = express.Router();
const umaController = require('../controllers/umaController');
const { uploadUmaImage } = require('../middlewares/upload');

// Endpoint: GET /api/umas
router.get('/', umaController.getAllUmas);

// Endpoint: GET /api/umas/:id
router.get('/:id', umaController.getUmaById);

// Middleware `uploadUmaImage.single('image_file')` akan memproses file
// yang dikirim dalam field bernama 'image_file'
router.post('/', uploadUmaImage.single('image_file'), umaController.createUma);

// Endpoint untuk memperbarui data Uma
router.put('/:id', uploadUmaImage.single('image_file'), umaController.updateUma);

// Endpoint untuk menghapus data Uma
router.delete('/:id', umaController.deleteUma);

module.exports = router;