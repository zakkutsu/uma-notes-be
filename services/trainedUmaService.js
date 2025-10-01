// services/trainedUmaService.js

const { trained_umas, umas, factors, skills } = require('../models');

/**
 * Mengambil semua data Trained Uma.
 */
const findAllTrainedUmas = async () => {
  return await trained_umas.findAll({
    // Sertakan nama dari Uma dasarnya agar mudah ditampilkan
    include: {
      model: umas,
      as: 'base_uma',
      attributes: ['name'] // Hanya ambil kolom nama
    }
  });
};

/**
 * Mengambil satu data Trained Uma berdasarkan ID dengan semua detailnya.
 * @param {number} id - ID dari Trained Uma
 */
const findTrainedUmaById = async (id) => {
  return await trained_umas.findByPk(id, {
    // Ini adalah query JOIN yang kompleks untuk mengambil semua data terkait
    include: [
      { model: umas, as: 'base_uma' },
      { model: trained_umas, as: 'parent1' },
      { model: trained_umas, as: 'parent2' },
      { 
        model: factors, 
        as: 'factors',
        through: { attributes: [] } // Sembunyikan data dari tabel penghubung
      },
      { 
        model: skills, 
        as: 'acquired_skills',
        through: { attributes: [] }
      }
    ]
  });
};

module.exports = {
  findAllTrainedUmas,
  findTrainedUmaById,
};