// controllers/skillController.js
const skillService = require('../services/skillService');
const { 
  successResponseWithPagination, 
  successResponse, 
  errorResponse, 
  deleteSuccessResponse,
  calculatePagination 
} = require('../helpers/responseFormatter');

const getAllSkills = async (req, res) => {
  try {
    // Ambil parameter pagination dari query
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    
    const result = await skillService.findAllSkills(page, limit);
    const paginationInfo = calculatePagination(result.totalRows, page, limit);
    
    const response = successResponseWithPagination(
      result.data, 
      'Skills berhasil diambil',
      200,
      paginationInfo
    );
    
    res.status(200).json(response);
  } catch (error) {
    const response = errorResponse('Gagal mengambil data skills', 500, error.message);
    res.status(500).json(response);
  }
};

const getSkillById = async (req, res) => {
  try {
    const skillId = req.params.id;
    const skill = await skillService.findSkillById(skillId);

    if (!skill) {
      const response = errorResponse(`Skill dengan id ${skillId} tidak ditemukan`, 404);
      return res.status(404).json(response);
    }

    const response = successResponse(skill, 'Skill berhasil diambil', 200);
    res.status(200).json(response);
  } catch (error) {
    const response = errorResponse('Gagal mengambil data skill', 500, error.message);
    res.status(500).json(response);
  }
};

const createSkill = async (req, res) => {
  try {
    const skillData = req.body;
    const newSkill = await skillService.createSkill(skillData);

    const response = successResponse(newSkill, 'Skill berhasil dibuat', 201);
    res.status(201).json(response);
  } catch (error) {
    const response = errorResponse('Gagal membuat skill', 500, error.message);
    res.status(500).json(response);
  }
};

const updateSkill = async (req, res) => {
  try {
    const skillId = req.params.id;
    const skillData = req.body;
    const updatedSkill = await skillService.updateSkill(skillId, skillData);

    if (!updatedSkill) {
      const response = errorResponse(`Skill dengan id ${skillId} tidak ditemukan`, 404);
      return res.status(404).json(response);
    }

    const response = successResponse(updatedSkill, 'Skill berhasil diperbarui', 200);
    res.status(200).json(response);
  } catch (error) {
    const response = errorResponse('Gagal memperbarui skill', 500, error.message);
    res.status(500).json(response);
  }
};

const deleteSkill = async (req, res) => {
  try {
    const skillId = req.params.id;
    const deletedRowsCount = await skillService.deleteSkill(skillId);

    if (deletedRowsCount === 0) {
      const response = errorResponse(`Skill dengan id ${skillId} tidak ditemukan`, 404);
      return res.status(404).json(response);
    }

    const response = deleteSuccessResponse('Skill berhasil dihapus', 200);
    res.status(200).json(response);
  } catch (error) {
    const response = errorResponse('Gagal menghapus skill', 500, error.message);
    res.status(500).json(response);
  }
};

module.exports = {
  getAllSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill
};