// routes/skillRoutes.js
const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');

// Endpoint: GET /api/v1/skills
router.get('/', skillController.getAllSkills);

// Endpoint: GET /api/v1/skills/:id
router.get('/:id', skillController.getSkillById);

// Endpoint: POST /api/v1/skills
router.post('/', skillController.createSkill);

// Endpoint: PUT /api/v1/skills/:id
router.put('/:id', skillController.updateSkill);

// Endpoint: DELETE /api/v1/skills/:id
router.delete('/:id', skillController.deleteSkill);

module.exports = router;