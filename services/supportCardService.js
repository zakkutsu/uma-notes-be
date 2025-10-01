// services/supportCardService.js

const { support_cards, skills } = require('../models');

/**
 * Mengambil semua data Support Card.
 */
const findAllSupportCards = async () => {
  return await support_cards.findAll();
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