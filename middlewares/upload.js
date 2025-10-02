// middlewares/upload.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Fungsi untuk memastikan direktori ada
const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Konfigurasi penyimpanan untuk berbagai jenis upload
const storage = (dir) => multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = `public/uploads/${dir}`;
    ensureDir(uploadPath); // Pastikan folder tujuan ada
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Buat nama file unik untuk menghindari duplikasi
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Middleware upload untuk setiap model
const uploadUmaImage = multer({ storage: storage('umas') });
const uploadSkillImage = multer({ storage: storage('skills') });
const uploadSupportCardImage = multer({ storage: storage('support_cards') });

module.exports = {
  uploadUmaImage,
  uploadSkillImage,
  uploadSupportCardImage,
};