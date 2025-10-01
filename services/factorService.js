// services/factorService.js

const { factors } = require('../models');

/**
 * Mengambil semua data Factor.
 */
const findAllFactors = async (page = 1, limit = 10) => {
  // Hitung offset untuk pagination
  const offset = (page - 1) * limit;
  
  const { count, rows } = await factors.findAndCountAll({
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
 * Mengambil satu Factor berdasarkan ID.
 * @param {number} factorId - ID dari Factor
 */
const findFactorById = async (factorId) => {
  return await factors.findByPk(factorId);
};

module.exports = {
  findAllFactors,
  findFactorById,
};