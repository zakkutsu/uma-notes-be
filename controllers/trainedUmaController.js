// controllers/trainedUmaController.js

const trainedUmaService = require('../services/trainedUmaService');
const { 
  successResponseWithPagination, 
  successResponse, 
  errorResponse,
  calculatePagination 
} = require('../helpers/responseFormatter');

const getAllTrainedUmas = async (req, res) => {
  try {
    // Ambil parameter pagination dari query
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    
    const result = await trainedUmaService.findAllTrainedUmas(page, limit);
    const paginationInfo = calculatePagination(result.totalRows, page, limit);
    
    const response = successResponseWithPagination(
      result.data, 
      'Data Trained Umas berhasil diambil',
      200,
      paginationInfo
    );
    
    res.status(200).json(response);
  } catch (error) {
    const response = errorResponse('Gagal mengambil data Trained Umas', 500, error.message);
    res.status(500).json(response);
  }
};

const getTrainedUmaById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await trainedUmaService.findTrainedUmaById(id);

    if (!data) {
      const response = errorResponse(`Trained Uma dengan id ${id} tidak ditemukan`, 404);
      return res.status(404).json(response);
    }
    
    const response = successResponse(data, 'Data Trained Uma berhasil diambil', 200);
    res.status(200).json(response);
  } catch (error) {
    const response = errorResponse('Gagal mengambil data Trained Uma', 500, error.message);
    res.status(500).json(response);
  }
};

module.exports = {
  getAllTrainedUmas,
  getTrainedUmaById,
};