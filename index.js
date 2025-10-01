// index.js
require('dotenv').config();

const express = require('express');
const { sequelize } = require('./models'); // Impor dari models
const umaRoutes = require('./routes/umaRoutes');
const factorRoutes = require('./routes/factorRoutes');
const trainedUmaRoutes = require('./routes/trainedUmaRoutes');

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
app.use('/api/trained-umas', trainedUmaRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});