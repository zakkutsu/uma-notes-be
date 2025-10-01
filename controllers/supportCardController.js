// controllers/supportCardController.js

const supportCardService = require('../services/supportCardService');
const { 
  successResponseWithPagination, 
  successResponse, 
  errorResponse,
  calculatePagination 
} = require('../helpers/responseFormatter');

const getAllSupportCards = async (req, res) => {
  try {
    // Ambil parameter pagination dari query
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    
    const result = await supportCardService.findAllSupportCards(page, limit);
    const paginationInfo = calculatePagination(result.totalRows, page, limit);
    
    const response = successResponseWithPagination(
      result.data, 
      'Data Support Cards berhasil diambil',
      200,
      paginationInfo
    );
    
    res.status(200).json(response);
  } catch (error) {
    const response = errorResponse('Gagal mengambil data Support Cards', 500, error.message);
    res.status(500).json(response);
  }
};

const getSupportCardById = async (req, res) => {
  try {
    const { id } = req.params;
    const card = await supportCardService.findSupportCardByIdWithSkills(id);

    if (!card) {
      const response = errorResponse(`Support Card dengan id ${id} tidak ditemukan`, 404);
      return res.status(404).json(response);
    }
    
    const response = successResponse(card, 'Data Support Card berhasil diambil', 200);
    res.status(200).json(response);
  } catch (error) {
    const response = errorResponse('Gagal mengambil data Support Card', 500, error.message);
    res.status(500).json(response);
  }
};

module.exports = {
  getAllSupportCards,
  getSupportCardById,
};