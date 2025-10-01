// services/supportCardService.js

const { support_cards, skills } = require('../models');

/**
 * Mengambil semua data Support Card.
 */
const findAllSupportCards = async (page = 1, limit = 10) => {
  // Hitung offset untuk pagination
  const offset = (page - 1) * limit;
  
  const { count, rows } = await support_cards.findAndCountAll({
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: [['id', 'ASC']]
  });
  
  return {
    data: rows,
    totalRows: count,
    currentPage: parseInt(page),
    limit: parseInt(limit)
  };
};

/**
 * Mengambil satu Support Card berdasarkan ID, beserta semua skill-nya.
 * @param {number} cardId - ID dari Support Card
 */
const findSupportCardByIdWithSkills = async (cardId) => {
  return await support_cards.findByPk(cardId, {
    include: [{
      model: skills,
      through: { attributes: [] } // Agar data tabel penghubung tidak ikut tampil
    }]
  });
};

module.exports = {
  findAllSupportCards,
  findSupportCardByIdWithSkills,
};