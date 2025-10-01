// routes/supportCardRoutes.js

const express = require('express');
const router = express.Router();
const supportCardController = require('../controllers/supportCardController');

// GET /api/support-cards
router.get('/', supportCardController.getAllSupportCards);

// GET /api/support-cards/:id
router.get('/:id', supportCardController.getSupportCardById);

module.exports = router;