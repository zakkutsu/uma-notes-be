// index.js
require('dotenv').config();

const express = require('express');
const sequelize = require('./models').sequelize; // Ambil instance sequelize dari models/index.js
const umaRoutes = require('./routes/umaRoutes');
const factorRoutes = require('./routes/factorRoutes');
const supportCardRoutes = require('./routes/supportCardRoutes');
const trainedUmaRoutes = require('./routes/trainedUmaRoutes');
const skillRoutes = require('./routes/skillRoutes');
const seederRoutes = require('./routes/seederRoutes');
const DatabaseSeeder = require('./seeders/databaseSeeder');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sajikan file statis dari direktori 'public'
app.use(express.static('public'));

// Gunakan route untuk endpoint /api/v1/umas
app.use('/api/v1/umas', umaRoutes);
app.use('/api/v1/factors', factorRoutes);
app.use('/api/v1/support-cards', supportCardRoutes);
app.use('/api/v1/trained-umas', trainedUmaRoutes);
app.use('/api/v1/skills', skillRoutes);
app.use('/api/v1/seed', seederRoutes);

const startServer = async () => {
  try {
    // Opsi untuk sinkronisasi. `alter: true` akan mencoba mengubah tabel yang ada agar sesuai dengan model.
    // Ini lebih aman daripada `force: true` karena tidak menghapus data.
    const syncOptions = { alter: true };

    // 1. Sinkronisasi database
    await sequelize.sync(syncOptions);
    console.log('Database tersinkronisasi.');

    // 2. Jalankan auto seeder setelah database sync
    if (process.env.AUTO_SEED === 'true') {
      console.log('🌱 Auto-seeding enabled, running seeders...');
      await DatabaseSeeder.seedAll();
    }

    // 3. Setelah database siap, jalankan server
    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error('Gagal memulai server:', error);
  }
};

// Panggil fungsi untuk memulai semuanya
startServer();