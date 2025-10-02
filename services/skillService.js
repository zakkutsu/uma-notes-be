// services/skillService.js
const { skills, image, sequelize } = require('../models');
const { getPublicUrl } = require('../helpers/url');

const findAllSkills = async (page = 1, limit = 10) => {
  try {
    // Hitung offset untuk pagination
    const offset = (page - 1) * limit;
    
    const { count, rows } = await skills.findAndCountAll({
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [['id', 'ASC']],
      include: [
        { model: image } // Sertakan gambar
      ]
    });
    
    // Convert image paths to full URLs
    const dataWithImageUrls = rows.map(skill => {
      const skillData = skill.toJSON();
      if (skillData.images && skillData.images.length > 0) {
        skillData.images = skillData.images.map(img => ({
          ...img,
          url: getPublicUrl(img.url)
        }));
      }
      return skillData;
    });
    
    return {
      data: dataWithImageUrls,
      totalRows: count,
      currentPage: parseInt(page),
      limit: parseInt(limit)
    };
  } catch (error) {
    throw new Error(`Gagal mengambil data skills: ${error.message}`);
  }
};

const findSkillById = async (skillId) => {
  try {
    const skill = await skills.findByPk(skillId, {
      include: [
        { model: image }
      ]
    });
    
    if (skill) {
      const skillData = skill.toJSON();
      if (skillData.images && skillData.images.length > 0) {
        skillData.images = skillData.images.map(img => ({
          ...img,
          url: getPublicUrl(img.url)
        }));
      }
      return skillData;
    }
    return skill;
  } catch (error) {
    throw new Error(`Gagal mengambil skill dengan id ${skillId}: ${error.message}`);
  }
};

const createSkillWithImage = async (skillData, file) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const newSkill = await skills.create(skillData, { transaction: t });

      if (file) {
        const imageUrl = file.path.replace(/\\/g, "/").replace('public/', '');
        await newSkill.createImage({ 
          url: imageUrl 
        }, { transaction: t });
      }

      return newSkill;
    });
    return result;
  } catch (error) {
    throw new Error(`Gagal membuat skill baru: ${error.message}`);
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
  createSkillWithImage,
  updateSkill,
  deleteSkill,
};