// controllers/factorController.js

const factorService = require('../services/factorService');

const getAllFactors = async (req, res) => {
  try {
    const factors = await factorService.findAllFactors();
    res.status(200).json(factors);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data Factors', error: error.message });
  }
};

const getFactorById = async (req, res) => {
  try {
    const { id } = req.params;
    const factor = await factorService.findFactorById(id);

    if (!factor) {
      return res.status(404).json({ message: `Factor dengan id ${id} tidak ditemukan.` });
    }
    res.status(200).json(factor);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data Factor', error: error.message });
  }
};

module.exports = {
  getAllFactors,
  getFactorById,
};