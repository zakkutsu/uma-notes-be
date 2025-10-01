// services/umaService.js
const { umas } = require('../models');

// Di sini logika bisnis berada. Saat ini masih sederhana.
const findAllUmas = async () => {
  // Service yang berkomunikasi dengan Model
  const allUmas = await umas.findAll();
  // Di masa depan, Anda bisa menambahkan logika lain di sini
  // misalnya, menghitung total power dari semua uma, dll.
  return allUmas;
};

/**
 * Mengambil satu Uma berdasarkan ID.
 * @param {number} umaId - ID dari Uma
 */
const findUmaById = async (umaId) => {
  return await umas.findByPk(umaId);
};

module.exports = {
  findAllUmas,
  findUmaById,
};