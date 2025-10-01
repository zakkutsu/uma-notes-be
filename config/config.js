// config/config.js

// Pastikan dotenv dimuat terlebih dahulu
require('dotenv').config();

module.exports = {
  // Lingkungan untuk Pengembangan Lokal (Development)
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres'
  },
  // Lingkungan untuk Pengujian Otomatis (Testing)
  test: {
    username: process.env.CI_DB_USERNAME, // Variabel bisa berbeda
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  // Lingkungan saat Aplikasi Online (Production)
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOST,
    dialect: 'postgres'
  }
};