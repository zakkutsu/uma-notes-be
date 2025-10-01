/**
 * Response formatter utility untuk standardisasi format response API
 */

/**
 * Format response untuk operasi sukses dengan pagination
 * @param {*} data - Data yang akan dikembalikan
 * @param {string} message - Pesan sukses
 * @param {number} code - HTTP status code
 * @param {Object} paginationInfo - Informasi pagination
 * @param {number} paginationInfo.currentPage - Halaman saat ini
 * @param {number} paginationInfo.totalPages - Total halaman
 * @param {number} paginationInfo.totalRows - Total data
 * @param {number} paginationInfo.limit - Limit per halaman
 * @returns {Object} Response object
 */
const successResponseWithPagination = (data, message, code = 200, paginationInfo = null) => {
  const response = {
    meta: {
      code,
      status: message,
      message: true
    }
  };

  if (paginationInfo) {
    const { currentPage, totalPages, totalRows, limit } = paginationInfo;
    const hasNextPage = currentPage < totalPages;
    const hasPrevPage = currentPage > 1;
    const startIndex = ((currentPage - 1) * limit) + 1;
    const endIndex = Math.min(currentPage * limit, totalRows);

    response.meta.isPaginated = {
      currentPage,
      totalPages,
      totalRows,
      limit,
      hasNextPage,
      hasPrevPage,
      startIndex,
      endIndex,
      showing: `${startIndex}-${endIndex} of ${totalRows} items`
    };
  } else {
    response.meta.isPaginated = false;
  }

  response.data = data;

  return response;
};

/**
 * Format response untuk operasi sukses tanpa pagination
 * @param {*} data - Data yang akan dikembalikan
 * @param {string} message - Pesan sukses
 * @param {number} code - HTTP status code
 * @returns {Object} Response object
 */
const successResponse = (data, message, code = 200) => {
  return {
    meta: {
      code,
      status: message,
      message: true,
      isPaginated: false
    },
    data
  };
};

/**
 * Format response untuk operasi error
 * @param {string} message - Pesan error
 * @param {number} code - HTTP status code
 * @param {*} error - Detail error (optional)
 * @returns {Object} Response object
 */
const errorResponse = (message, code = 500, error = null) => {
  const response = {
    meta: {
      code,
      status: message,
      message: false,
      isPaginated: false
    }
  };

  if (error) {
    response.error = error;
  }

  return response;
};

/**
 * Format response untuk operasi delete yang sukses
 * @param {string} message - Pesan sukses
 * @param {number} code - HTTP status code
 * @returns {Object} Response object
 */
const deleteSuccessResponse = (message, code = 200) => {
  return {
    meta: {
      code,
      status: message,
      message: true,
      isPaginated: false
    }
  };
};

/**
 * Hitung informasi pagination
 * @param {number} totalRows - Total data
 * @param {number} page - Halaman saat ini
 * @param {number} limit - Limit per halaman
 * @returns {Object} Pagination info
 */
const calculatePagination = (totalRows, page = 1, limit = 10) => {
  const totalPages = Math.ceil(totalRows / limit);
  const currentPage = Math.max(1, Math.min(page, totalPages));

  return {
    currentPage,
    totalPages,
    totalRows,
    limit
  };
};

module.exports = {
  successResponseWithPagination,
  successResponse,
  errorResponse,
  deleteSuccessResponse,
  calculatePagination
};