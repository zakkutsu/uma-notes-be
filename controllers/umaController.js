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

const createUma = async (req, res) => {
  try {
    // Ambil data dari body request
    const newUmaData = req.body;
    const createdUma = await umaService.createUma(newUmaData);

    // Kirim response 201 Created yang menandakan sukses
    res.status(201).json(createdUma);
  } catch (error) {
    res.status(500).json({ message: 'Gagal membuat data Uma', error: error.message });
  }
};

const updateUma = async (req, res) => {
  try {
    const { id } = req.params;
    const umaData = req.body;
    const updatedUma = await umaService.updateUma(id, umaData);

    if (!updatedUma) {
      return res.status(404).json({ message: `Uma dengan id ${id} tidak ditemukan.` });
    }
    res.status(200).json(updatedUma);
  } catch (error) {
    res.status(500).json({ message: 'Gagal memperbarui data Uma', error: error.message });
  }
};

const deleteUma = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCount = await umaService.deleteUma(id);

    if (deletedCount === 0) {
      return res.status(404).json({ message: `Uma dengan id ${id} tidak ditemukan.` });
    }
    // 204 No Content adalah respons standar untuk delete yang sukses
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus data Uma', error: error.message });
  }
};

module.exports = {
  getAllUmas,
  getUmaById,
  createUma,
  updateUma,
  deleteUma,
};