// routes/umaRoutes.js
const express = require('express');
const router = express.Router();
const umaController = require('../controllers/umaController');

// Endpoint: GET /api/umas
router.get('/', umaController.getAllUmas);

// Endpoint: GET /api/umas/:id
router.get('/:id', umaController.getUmaById);

// Tambahkan route POST baru
router.post('/', umaController.createUma);

// Endpoint untuk memperbarui data Uma
router.put('/:id', umaController.updateUma);

// Endpoint untuk menghapus data Uma
router.delete('/:id', umaController.deleteUma);

module.exports = router;