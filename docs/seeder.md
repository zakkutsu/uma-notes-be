# Database Seeder Documentation

## Overview
Auto seeder yang telah diintegrasikan untuk mengisi database dengan data sample Uma Musume. Seeder akan otomatis berjalan saat aplikasi startup atau bisa dijalankan manual melalui API.

## Configuration

### Environment Variables
Tambahkan di file `.env`:
```properties
# Auto Seeder Configuration
AUTO_SEED=true  # Set true untuk auto-run saat startup, false untuk disable
```

## Data yang di-seed

### 1. Umas (10 characters)
- Special Week, Silence Suzuka, Tokai Teio, Vodka, Daiwa Scarlet
- Gold Ship, Mejiro McQueen, El Condor Pasa, T.M. Opera O, Narita Brian
- Setiap Uma memiliki turf_aptitude dan dirt_aptitude

### 2. Skills (10 skills)
- Speed skills: Concentration, Pace Up, Final Spurt
- Strategy skills: Positioning, Cornering  
- Stamina skills: Stamina Keeper, Recovery
- Power skills: Power Charge
- Guts skills: Mental Strength
- Wit skills: Quick Thinking

### 3. Factors (15 factors)
- 5 types: Speed, Stamina, Power, Guts, Wit
- 3 tiers each: Blue (1 star), Red (2 stars), Rainbow (3 stars)

### 4. Support Cards (12 cards)
- SSR cards untuk Uma utama
- SR cards untuk Uma sekunder  
- R cards untuk trainer/friend cards
- Berbagai tipe: Speed, Stamina, Power, Guts, Wit, Friend

## API Endpoints

### GET /api/seed
Melihat status seeding dan statistik data
```json
{
  "success": true,
  "message": "Seeding status retrieved successfully",
  "data": {
    "statistics": {
      "umas": 10,
      "skills": 10, 
      "factors": 15,
      "support_cards": 12
    },
    "autoSeedEnabled": true
  }
}
```

### POST /api/seed/run
Manual trigger untuk menjalankan seeder
```json
{
  "success": true,
  "message": "Database seeding completed successfully",
  "timestamp": "2025-10-01T04:59:01.000Z"
}
```

### DELETE /api/seed/clear
Menghapus semua data yang di-seed
```json
{
  "success": true,
  "message": "All seeded data cleared successfully",
  "timestamp": "2025-10-01T04:59:01.000Z"
}
```

### POST /api/seed/reset
Clear dan re-seed semua data
```json
{
  "success": true,
  "message": "Database reset and re-seeding completed successfully", 
  "timestamp": "2025-10-01T04:59:01.000Z"
}
```

## Features

### Smart Duplicate Prevention
- Seeder mengecek apakah data sudah ada sebelum insert
- Tidak akan membuat data duplikat jika dijalankan berulang kali
- Skip seeding jika data sudah ada dan log informasi

### Auto Integration
- Otomatis berjalan setelah database sync di app.js
- Terintegrasi dengan lifecycle aplikasi
- Logging yang informatif untuk monitoring

### Manual Control
- Bisa dijalankan manual via API
- Support untuk clear dan reset data
- Status monitoring via API

## Usage Examples

### Auto Seeding (Default)
```bash
# Set di .env
AUTO_SEED=true

# Jalankan aplikasi
npm start
# Seeder akan otomatis berjalan setelah database sync
```

### Manual Seeding
```bash
# Disable auto seeding di .env
AUTO_SEED=false

# Jalankan manual via API
curl -X POST http://localhost:3000/api/seed/run
```

### Development Workflow
```bash
# Reset database dengan data fresh
curl -X POST http://localhost:3000/api/seed/reset

# Clear semua data
curl -X DELETE http://localhost:3000/api/seed/clear

# Check status
curl http://localhost:3000/api/seed
```

## File Structure
```
seeders/
├── databaseSeeder.js     # Main seeder class
├── autoSeeder.js        # Legacy seeder (masih ada)
routes/
├── seederRoutes.js      # API routes untuk seeder
```

## Error Handling
- Seeder akan menangkap dan log error jika terjadi kegagalan
- API akan return status error dengan message yang jelas
- Aplikasi tetap bisa start meskipun seeding gagal
- Rollback otomatis jika ada error saat seeding

## Best Practices
1. Set `AUTO_SEED=false` di production environment
2. Gunakan manual seeding untuk development dan testing
3. Selalu check status sebelum melakukan reset
4. Backup data production sebelum menjalankan clear operations