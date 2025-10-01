// routes/factorRoutes.js

const express = require('express');
const router = express.Router();
const factorController = require('../controllers/factorController');

// GET /api/factors
router.get('/', factorController.getAllFactors);

// GET /api/factors/:id
router.get('/:id', factorController.getFactorById);

module.exports = router;