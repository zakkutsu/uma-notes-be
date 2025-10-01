// controllers/skillController.js
const skillService = require('../services/skillService');

const getAllSkills = async (req, res) => {
  try {
    const skills = await skillService.findAllSkills();
    res.status(200).json({
      success: true,
      message: 'Skills berhasil diambil',
      data: skills
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const getSkillById = async (req, res) => {
  try {
    const skillId = req.params.id;
    const skill = await skillService.findSkillById(skillId);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: `Skill dengan id ${skillId} tidak ditemukan`
      });
    }

    res.status(200).json({
      success: true,
      message: 'Skill berhasil diambil',
      data: skill
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const createSkill = async (req, res) => {
  try {
    const skillData = req.body;
    const newSkill = await skillService.createSkill(skillData);

    res.status(201).json({
      success: true,
      message: 'Skill berhasil dibuat',
      data: newSkill
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const updateSkill = async (req, res) => {
  try {
    const skillId = req.params.id;
    const skillData = req.body;
    const updatedSkill = await skillService.updateSkill(skillId, skillData);

    if (!updatedSkill) {
      return res.status(404).json({
        success: false,
        message: `Skill dengan id ${skillId} tidak ditemukan`
      });
    }

    res.status(200).json({
      success: true,
      message: 'Skill berhasil diperbarui',
      data: updatedSkill
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const deleteSkill = async (req, res) => {
  try {
    const skillId = req.params.id;
    const deletedRowsCount = await skillService.deleteSkill(skillId);

    if (deletedRowsCount === 0) {
      return res.status(404).json({
        success: false,
        message: `Skill dengan id ${skillId} tidak ditemukan`
      });
    }

    res.status(200).json({
      success: true,
      message: 'Skill berhasil dihapus'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getAllSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill
};