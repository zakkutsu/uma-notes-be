// services/skillService.js
const { skills } = require('../models');

const findAllSkills = async () => {
  try {
    const allSkills = await skills.findAll({
      order: [['id', 'ASC']]
    });
    return allSkills;
  } catch (error) {
    throw new Error(`Gagal mengambil data skills: ${error.message}`);
  }
};

const findSkillById = async (skillId) => {
  try {
    const skill = await skills.findByPk(skillId);
    return skill;
  } catch (error) {
    throw new Error(`Gagal mengambil skill dengan id ${skillId}: ${error.message}`);
  }
};

const createSkill = async (skillData) => {
  try {
    const newSkill = await skills.create(skillData);
    return newSkill;
  } catch (error) {
    throw new Error(`Gagal membuat skill baru: ${error.message}`);
  }
};

const updateSkill = async (skillId, skillData) => {
  try {
    const [updatedRowsCount] = await skills.update(skillData, {
      where: { id: skillId }
    });

    if (updatedRowsCount === 0) {
      return null;
    }

    // Ambil data yang telah diupdate
    const updatedSkill = await skills.findByPk(skillId);
    return updatedSkill;
  } catch (error) {
    throw new Error(`Gagal mengupdate skill dengan id ${skillId}: ${error.message}`);
  }
};

const deleteSkill = async (skillId) => {
  try {
    const deletedRowsCount = await skills.destroy({
      where: { id: skillId }
    });
    return deletedRowsCount;
  } catch (error) {
    throw new Error(`Gagal menghapus skill dengan id ${skillId}: ${error.message}`);
  }
};

module.exports = {
  findAllSkills,
  findSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
};