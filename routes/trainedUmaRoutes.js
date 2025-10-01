// routes/trainedUmaRoutes.js

const express = require('express');
const router = express.Router();
const trainedUmaController = require('../controllers/trainedUmaController');

// GET /api/trained-umas
router.get('/', trainedUmaController.getAllTrainedUmas);

// GET /api/trained-umas/:id
router.get('/:id', trainedUmaController.getTrainedUmaById);

module.exports = router;