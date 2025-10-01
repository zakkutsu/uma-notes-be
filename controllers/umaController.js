// controllers/umaController.js
const umaService = require('../services/umaService');

const getAllUmas = async (req, res) => {
  try {
    // Controller sekarang memanggil Service, bukan Model
    const umas = await umaService.findAllUmas();
    res.json(umas);
  } catch (error) {
    res.status(500).json({ message: 'Error' });
  }
};

const getUmaById = async (req, res) => {
  try {
    const { id } = req.params;
    const uma = await umaService.findUmaById(id);

    if (!uma) {
      return res.status(404).json({ message: `Uma dengan id ${id} tidak ditemukan.` });
    }
    res.json(uma);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data Uma', error: error.message });
  }
};

module.exports = {
  getAllUmas,
  getUmaById,
};