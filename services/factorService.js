// services/factorService.js

const { factors, image } = require('../models');
const { getPublicUrl } = require('../helpers/url');

/**
 * Mengambil semua data Factor.
 */
const findAllFactors = async (page = 1, limit = 10) => {
  // Hitung offset untuk pagination
  const offset = (page - 1) * limit;
  
  const { count, rows } = await factors.findAndCountAll({
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: [['id', 'ASC']],
    include: [
      { model: image } // Sertakan gambar
    ]
  });
  
  // Convert image paths to full URLs
  const dataWithImageUrls = rows.map(factor => {
    const factorData = factor.toJSON();
    if (factorData.images && factorData.images.length > 0) {
      factorData.images = factorData.images.map(img => ({
        ...img,
        url: getPublicUrl(img.url)
      }));
    }
    return factorData;
  });
  
  return {
    data: dataWithImageUrls,
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
  const factor = await factors.findByPk(factorId, {
    include: [
      { model: image }
    ]
  });
  
  if (factor) {
    const factorData = factor.toJSON();
    if (factorData.images && factorData.images.length > 0) {
      factorData.images = factorData.images.map(img => ({
        ...img,
        url: getPublicUrl(img.url)
      }));
    }
    return factorData;
  }
  return factor;
};

module.exports = {
  findAllFactors,
  findFactorById,
};