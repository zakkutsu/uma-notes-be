// services/factorService.js

const { factors } = require('../models');

/**
 * Mengambil semua data Factor.
 */
const findAllFactors = async () => {
  return await factors.findAll();
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