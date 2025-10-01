// controllers/umaController.js
const umaService = require('../services/umaService');
const { 
  successResponseWithPagination, 
  successResponse, 
  errorResponse, 
  deleteSuccessResponse,
  calculatePagination 
} = require('../helpers/responseFormatter');

const getAllUmas = async (req, res) => {
  try {
    // Ambil parameter pagination dari query
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    
    // Controller sekarang memanggil Service, bukan Model
    const result = await umaService.findAllUmas(page, limit);
    const paginationInfo = calculatePagination(result.totalRows, page, limit);
    
    const response = successResponseWithPagination(
      result.data, 
      'Data Uma berhasil diambil',
      200,
      paginationInfo
    );
    
    res.status(200).json(response);
  } catch (error) {
    const response = errorResponse('Gagal mengambil data Uma', 500, error.message);
    res.status(500).json(response);
  }
};

const getUmaById = async (req, res) => {
  try {
    const { id } = req.params;
    const uma = await umaService.findUmaById(id);

    if (!uma) {
      const response = errorResponse(`Uma dengan id ${id} tidak ditemukan`, 404);
      return res.status(404).json(response);
    }
    
    const response = successResponse(uma, 'Data Uma berhasil diambil', 200);
    res.status(200).json(response);
  } catch (error) {
    const response = errorResponse('Gagal mengambil data Uma', 500, error.message);
    res.status(500).json(response);
  }
};

const createUma = async (req, res) => {
  try {
    // Ambil data dari body request
    const newUmaData = req.body;
    const createdUma = await umaService.createUma(newUmaData);

    // Kirim response 201 Created yang menandakan sukses
    const response = successResponse(createdUma, 'Data Uma berhasil dibuat', 201);
    res.status(201).json(response);
  } catch (error) {
    const response = errorResponse('Gagal membuat data Uma', 500, error.message);
    res.status(500).json(response);
  }
};

const updateUma = async (req, res) => {
  try {
    const { id } = req.params;
    const umaData = req.body;
    const updatedUma = await umaService.updateUma(id, umaData);

    if (!updatedUma) {
      const response = errorResponse(`Uma dengan id ${id} tidak ditemukan`, 404);
      return res.status(404).json(response);
    }
    
    const response = successResponse(updatedUma, 'Data Uma berhasil diperbarui', 200);
    res.status(200).json(response);
  } catch (error) {
    const response = errorResponse('Gagal memperbarui data Uma', 500, error.message);
    res.status(500).json(response);
  }
};

const deleteUma = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCount = await umaService.deleteUma(id);

    if (deletedCount === 0) {
      const response = errorResponse(`Uma dengan id ${id} tidak ditemukan`, 404);
      return res.status(404).json(response);
    }
    
    // Kirim response sukses untuk delete
    const response = deleteSuccessResponse('Data Uma berhasil dihapus', 200);
    res.status(200).json(response);
  } catch (error) {
    const response = errorResponse('Gagal menghapus data Uma', 500, error.message);
    res.status(500).json(response);
  }
};

module.exports = {
  getAllUmas,
  getUmaById,
  createUma,
  updateUma,
  deleteUma,
};