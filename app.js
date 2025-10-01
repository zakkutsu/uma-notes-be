// index.js
require('dotenv').config();

const express = require('express');
const sequelize = require('./models').sequelize; // Ambil instance sequelize dari models/index.js
const umaRoutes = require('./routes/umaRoutes');
const factorRoutes = require('./routes/factorRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sinkronisasi database
// force: true akan menghapus tabel jika sudah ada (hati-hati di produksi)
sequelize.sync({ force: false }).then(() => {
  console.log('Database tersinkronisasi.');
});

// Gunakan route untuk endpoint /api/umas
app.use('/api/umas', umaRoutes);
app.use('/api/factors', factorRoutes);

const startServer = async () => {
  try {
    // 1. Tunggu sampai proses sinkronisasi database selesai
    await sequelize.sync({ force: false });
    console.log('Database tersinkronisasi.');

    // 2. Setelah database siap, BARU jalankan server
    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error('Gagal memulai server:', error);
  }
};

// Panggil fungsi untuk memulai semuanya
startServer();