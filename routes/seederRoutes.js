const express = require('express');
const router = express.Router();
const DatabaseSeeder = require('../seeders/databaseSeeder');

// GET /api/seed - Get seeding status/info
router.get('/', async (req, res) => {
  try {
    const { sequelize } = require('../models');
    
    // Cek jumlah data di setiap tabel
    const stats = {
      umas: await sequelize.models.umas.count(),
      skills: await sequelize.models.skills.count(),
      factors: await sequelize.models.factors.count(),
      support_cards: await sequelize.models.support_cards.count()
    };

    res.json({
      success: true,
      message: 'Seeding status retrieved successfully',
      data: {
        statistics: stats,
        autoSeedEnabled: process.env.AUTO_SEED === 'true'
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving seeding status',
      error: error.message
    });
  }
});

// POST /api/seed/run - Manual trigger untuk menjalankan seeder
router.post('/run', async (req, res) => {
  try {
    console.log('🌱 Manual seeding triggered via API');
    const result = await DatabaseSeeder.seedAll();
    
    if (result) {
      res.json({
        success: true,
        message: 'Database seeding completed successfully',
        timestamp: new Date().toISOString()
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Database seeding failed'
      });
    }
  } catch (error) {
    console.error('Error during manual seeding:', error);
    res.status(500).json({
      success: false,
      message: 'Error during seeding',
      error: error.message
    });
  }
});

// DELETE /api/seed/clear - Clear all seeded data
router.delete('/clear', async (req, res) => {
  try {
    console.log('🧹 Manual data clearing triggered via API');
    const result = await DatabaseSeeder.clearAll();
    
    if (result) {
      res.json({
        success: true,
        message: 'All seeded data cleared successfully',
        timestamp: new Date().toISOString()
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Data clearing failed'
      });
    }
  } catch (error) {
    console.error('Error during data clearing:', error);
    res.status(500).json({
      success: false,
      message: 'Error during data clearing',
      error: error.message
    });
  }
});

// POST /api/seed/reset - Clear dan re-seed semua data
router.post('/reset', async (req, res) => {
  try {
    console.log('🔄 Manual reset (clear + seed) triggered via API');
    
    // Clear existing data
    const clearResult = await DatabaseSeeder.clearAll();
    if (!clearResult) {
      throw new Error('Failed to clear existing data');
    }
    
    // Re-seed data
    const seedResult = await DatabaseSeeder.seedAll();
    if (!seedResult) {
      throw new Error('Failed to seed data');
    }
    
    res.json({
      success: true,
      message: 'Database reset and re-seeding completed successfully',
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error during reset:', error);
    res.status(500).json({
      success: false,
      message: 'Error during reset',
      error: error.message
    });
  }
});

module.exports = router;