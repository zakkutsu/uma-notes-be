// controllers/supportCardController.js

const supportCardService = require('../services/supportCardService');

const getAllSupportCards = async (req, res) => {
  try {
    const cards = await supportCardService.findAllSupportCards();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data Support Cards', error: error.message });
  }
};

const getSupportCardById = async (req, res) => {
  try {
    const { id } = req.params;
    const card = await supportCardService.findSupportCardByIdWithSkills(id);

    if (!card) {
      return res.status(404).json({ message: `Support Card dengan id ${id} tidak ditemukan.` });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data Support Card', error: error.message });
  }
};

module.exports = {
  getAllSupportCards,
  getSupportCardById,
};