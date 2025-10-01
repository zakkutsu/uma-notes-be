// services/trainedUmaService.js

const { trained_umas, umas, factors, skills } = require('../models');

/**
 * Mengambil semua data Trained Uma.
 */
const findAllTrainedUmas = async (page = 1, limit = 10) => {
  // Hitung offset untuk pagination
  const offset = (page - 1) * limit;
  
  const { count, rows } = await trained_umas.findAndCountAll({
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: [['id', 'ASC']],
    // Sertakan nama dari Uma dasarnya agar mudah ditampilkan
    include: {
      model: umas,
      as: 'base_uma',
      attributes: ['name'] // Hanya ambil kolom nama
    }
  });
  
  return {
    data: rows,
    totalRows: count,
    currentPage: parseInt(page),
    limit: parseInt(limit)
  };
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