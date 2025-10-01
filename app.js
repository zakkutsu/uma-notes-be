// index.js
require('dotenv').config();

const express = require('express');
const sequelize = require('./models').sequelize; // Ambil instance sequelize dari models/index.js
const umaRoutes = require('./routes/umaRoutes');
const factorRoutes = require('./routes/factorRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Gunakan route untuk endpoint /api/umas
app.use('/api/umas', umaRoutes);
app.use('/api/factors', factorRoutes);

const startServer = async () => {
  try {
    // Opsi untuk sinkronisasi. `alter: true` akan mencoba mengubah tabel yang ada agar sesuai dengan model.
    // Ini lebih aman daripada `force: true` karena tidak menghapus data.
    const syncOptions = { alter: true };

    // 1. Sinkronisasi database
    await sequelize.sync(syncOptions);
    console.log('Database tersinkronisasi.');

    // 2. Setelah database siap, jalankan server
    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error('Gagal memulai server:', error);
  }
};

// Panggil fungsi untuk memulai semuanya
startServer();