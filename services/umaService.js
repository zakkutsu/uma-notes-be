// services/umaService.js
const { umas } = require('../models');

// Di sini logika bisnis berada. Saat ini masih sederhana.
const findAllUmas = async (page = 1, limit = 10) => {
  // Hitung offset untuk pagination
  const offset = (page - 1) * limit;
  
  // Service yang berkomunikasi dengan Model dengan pagination
  const { count, rows } = await umas.findAndCountAll({
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: [['id', 'ASC']] // Tambahkan ordering untuk konsistensi
  });
  
  return {
    data: rows,
    totalRows: count,
    currentPage: parseInt(page),
    limit: parseInt(limit)
  };
};

/**
 * Mengambil satu Uma berdasarkan ID.
 * @param {number} umaId - ID dari Uma
 */
const findUmaById = async (umaId) => {
  return await umas.findByPk(umaId);
};

/**
 * Membuat data Uma baru di database.
 * @param {object} umaData - Data untuk Uma baru
 */
const createUma = async (umaData) => {
  return await umas.create(umaData);
};

/**
 * Memperbarui data Uma berdasarkan ID.
 * @param {number} umaId - ID dari Uma yang akan diperbarui
 * @param {object} umaData - Data baru untuk Uma
 */
const updateUma = async (umaId, umaData) => {
  const uma = await umas.findByPk(umaId);
  if (!uma) {
    return null; // Kembalikan null jika data tidak ditemukan
  }
  // Lakukan update dan kembalikan data yang sudah diperbarui
  return await uma.update(umaData);
};

/**
 * Menghapus data Uma berdasarkan ID.
 * @param {number} umaId - ID dari Uma yang akan dihapus
 */
const deleteUma = async (umaId) => {
  const uma = await umas.findByPk(umaId);
  if (!uma) {
    return 0; // Kembalikan 0 jika tidak ada data yang dihapus
  }
  await uma.destroy();
  return 1; // Kembalikan 1 menandakan 1 baris berhasil dihapus
};

module.exports = {
  findAllUmas,
  findUmaById,
  createUma,
  updateUma,
  deleteUma,
};