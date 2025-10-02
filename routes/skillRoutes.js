// routes/skillRoutes.js
const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');
const { uploadSkillImage } = require('../middlewares/upload');

// Endpoint: GET /api/v1/skills
router.get('/', skillController.getAllSkills);

// Endpoint: GET /api/v1/skills/:id
router.get('/:id', skillController.getSkillById);

// Endpoint: POST /api/v1/skills
router.post('/', uploadSkillImage.single('image_file'), skillController.createSkill);

// Endpoint: PUT /api/v1/skills/:id
router.put('/:id', uploadSkillImage.single('image_file'), skillController.updateSkill);

// Endpoint: DELETE /api/v1/skills/:id
router.delete('/:id', skillController.deleteSkill);

module.exports = router;