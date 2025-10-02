// services/umaService.js
const { umas, image, sequelize } = require('../models');
const { getPublicUrl } = require('../helpers/url');

// Di sini logika bisnis berada. Saat ini masih sederhana.
const findAllUmas = async (page = 1, limit = 10) => {
  // Hitung offset untuk pagination
  const offset = (page - 1) * limit;
  
  // Service yang berkomunikasi dengan Model dengan pagination
  const { count, rows } = await umas.findAndCountAll({
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: [['id', 'ASC']], // Tambahkan ordering untuk konsistensi
    include: [
      { model: image } // Sertakan gambar
    ]
  });
  
  // Convert image paths to full URLs
  const dataWithImageUrls = rows.map(uma => {
    const umaData = uma.toJSON();
    if (umaData.images && umaData.images.length > 0) {
      umaData.images = umaData.images.map(img => ({
        ...img,
        url: getPublicUrl(img.url)
      }));
    }
    return umaData;
  });
  
  return {
    data: dataWithImageUrls,
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
  const uma = await umas.findByPk(umaId, {
    // Cukup sertakan model image
    include: [
      { model: image }, // Akan mengambil semua gambar yang imageable_type='uma' & imageable_id=id
      // ... include relasi lain seperti skills
    ]
  });
  
  if (uma) {
    const umaData = uma.toJSON();
    if (umaData.images && umaData.images.length > 0) {
      umaData.images = umaData.images.map(img => ({
        ...img,
        url: getPublicUrl(img.url)
      }));
    }
    return umaData;
  }
  return uma;
};

/**
 * Membuat data Uma baru di database dengan gambar.
 * @param {object} umaData - Data untuk Uma baru
 * @param {object} file - File gambar yang diupload
 */
const createUmaWithImage = async (umaData, file) => {
  // Gunakan transaksi untuk memastikan kedua operasi (membuat uma & image) berhasil
  const result = await sequelize.transaction(async (t) => {
    const newUma = await umas.create(umaData, { transaction: t });

    if (file) {
      const imageUrl = file.path.replace(/\\/g, "/").replace('public/', '');
      // Method 'createImage' otomatis ada karena relasi hasMany
      await newUma.createImage({ 
        url: imageUrl 
      }, { transaction: t });
    }

    return newUma;
  });
  return result;
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
  createUmaWithImage,
  updateUma,
  deleteUma,
};