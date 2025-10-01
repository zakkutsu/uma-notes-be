// controllers/factorController.js

const factorService = require('../services/factorService');
const { 
  successResponseWithPagination, 
  successResponse, 
  errorResponse,
  calculatePagination 
} = require('../helpers/responseFormatter');

const getAllFactors = async (req, res) => {
  try {
    // Ambil parameter pagination dari query
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    
    const result = await factorService.findAllFactors(page, limit);
    const paginationInfo = calculatePagination(result.totalRows, page, limit);
    
    const response = successResponseWithPagination(
      result.data, 
      'Data Factors berhasil diambil',
      200,
      paginationInfo
    );
    
    res.status(200).json(response);
  } catch (error) {
    const response = errorResponse('Gagal mengambil data Factors', 500, error.message);
    res.status(500).json(response);
  }
};

const getFactorById = async (req, res) => {
  try {
    const { id } = req.params;
    const factor = await factorService.findFactorById(id);

    if (!factor) {
      const response = errorResponse(`Factor dengan id ${id} tidak ditemukan`, 404);
      return res.status(404).json(response);
    }
    
    const response = successResponse(factor, 'Data Factor berhasil diambil', 200);
    res.status(200).json(response);
  } catch (error) {
    const response = errorResponse('Gagal mengambil data Factor', 500, error.message);
    res.status(500).json(response);
  }
};

module.exports = {
  getAllFactors,
  getFactorById,
};