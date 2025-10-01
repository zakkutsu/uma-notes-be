// controllers/trainedUmaController.js

const trainedUmaService = require('../services/trainedUmaService');

const getAllTrainedUmas = async (req, res) => {
  try {
    const data = await trainedUmaService.findAllTrainedUmas();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data Trained Umas', error: error.message });
  }
};

const getTrainedUmaById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await trainedUmaService.findTrainedUmaById(id);

    if (!data) {
      return res.status(404).json({ message: `Trained Uma dengan id ${id} tidak ditemukan.` });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data Trained Uma', error: error.message });
  }
};

module.exports = {
  getAllTrainedUmas,
  getTrainedUmaById,
};