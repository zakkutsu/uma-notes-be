# 🐎 Uma Musume Notes - Backend API

Backend REST API untuk aplikasi **Uma Musume Notes**, sebuah database online komprehensif yang didedikasikan untuk game **Uma Musume Pretty Derby**. Aplikasi ini menyediakan sistem manajemen data karakter, skill, support card, dan sistem inheritance yang kompleks.

## 🎯 Tujuan

Membangun **website database Uma Musume yang mudah dicari dan informatif** dengan fitur:

- **Database Online**: Sistem penyimpanan terpusat untuk semua data Uma Musume
- **API Terstruktur**: REST API yang skalabel dan mudah dikonsumsi
- **Sistem Inheritance**: Manajemen breeding dan factor inheritance yang kompleks  
- **Data Normalisasi**: Struktur database yang efisien tanpa redundansi
- **Auto Seeding**: Sistem populasi data otomatis untuk development

## 📚 Dokumentasi

### **Database Schema (ERD Compliant)**
Struktur database mengikuti **ERD best practices** dengan:
- **Normalized Tables**: Menghilangkan redundansi data
- **Junction Tables**: Proper many-to-many relationships
- **Self-referencing**: Parent-child relationships untuk breeding
- **Comprehensive Fields**: 16 aptitude types, skill categories, factor colors

### **Tech Stack**
- **Runtime**: Node.js dengan Express.js
- **Database**: PostgreSQL dengan Sequelize ORM
- **Upload**: Multer untuk file handling
- **Development**: Nodemon untuk hot reload
- **Containerization**: Docker Compose untuk PostgreSQL

### **API Documentation**
Endpoint utama yang tersedia:

#### **Umas (Characters)**
- `GET /api/v1/umas` - List semua karakter Uma Musume
- `GET /api/v1/umas/:id` - Detail karakter dengan skills & associations

#### **Skills** 
- `GET /api/v1/skills` - Database terpusat semua skill
- `GET /api/v1/skills/:id` - Detail skill dengan rarity & type

#### **Support Cards**
- `GET /api/v1/support-cards` - List semua support card  
- `GET /api/v1/support-cards/:id` - Detail card dengan skills yang diberikan

#### **Factors**
- `GET /api/v1/factors` - List inheritance factors
- `GET /api/v1/factors/:id` - Detail factor dengan color & star rating

#### **Seeder Control**
- `GET /api/v1/seed` - Status seeding & statistik data
- `POST /api/v1/seed/run` - Manual trigger seeding
- `DELETE /api/v1/seed/clear` - Clear all seeded data
- `POST /api/v1/seed/reset` - Reset & re-seed database

## ✨ Fitur Utama

### **🗄️ Comprehensive Database**
- **5+ Karakter Uma** dengan 16 aptitude types lengkap (Speed, Stamina, Power, Guts, Wit)
- **Skills Database** dengan rarity system (Normal/Rare/Unique) dan 9 skill types
- **Support Cards** dengan tier system (SSR/SR/R) dan berbagai card types
- **Inheritance Factors** dengan color coding (Blue/Red/Green/White/Rainbow) & star ratings

### **🔄 Smart Auto Seeder**
- **Duplicate Prevention**: Tidak akan membuat data duplikat
- **Environment Control**: Toggle via `AUTO_SEED=true/false`
- **Manual Control**: API endpoints untuk kontrol seeding
- **Data Validation**: Comprehensive field validation

### **🖼️ Image Management System**
- **Polymorphic Relations**: Satu sistem gambar untuk semua entitas
- **File Upload**: Multer integration dengan organized folder structure
- **URL Generation**: Automatic public URL generation untuk images
- **Multiple Formats**: Support untuk berbagai format gambar

### **⚡ Production Ready**
- **PostgreSQL**: Database production-grade
- **Sequelize ORM**: Advanced query capabilities dengan auto-migration
- **Docker Support**: Containerized deployment
- **Error Handling**: Robust error management dengan standardized responses
- **Environment Config**: Flexible configuration system

## �️ Preview Singkat

### **Database Structure**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────────┐
│    Umas     │◄──►│  uma_skills  │◄──►│     Skills      │
│             │    │              │    │                 │
│ - 16 aptitude    │ - skill_category   │ - skill_rarity  │
│ - base stats │    │ - uma_id     │    │ - skill_effect  │
└─────────────┘    │ - skill_id   │    └─────────────────┘
                   └──────────────┘              ▲
                                                 │
┌─────────────┐    ┌──────────────┐              │
│TrainedUmas  │◄──►│trained_uma_  │              │
│             │    │acquired_skills◄─────────────┘
│ - final_stats    └──────────────┘
│ - parent1_id │
│ - parent2_id │    ┌──────────────┐    ┌─────────────────┐
└─────────────┘◄──►│trained_uma_  │◄──►│    Factors      │
                   │  factors     │    │                 │
                   │ - star_rating│    │ - factor_type   │
                   └──────────────┘    │ - color         │
                                       └─────────────────┘
```

### **API Response Example**
```json
{
  "meta": {
    "code": 200,
    "status": "Data Uma berhasil diambil",
    "message": true,
    "isPaginated": true
  },
  "pagination": {
    "currentPage": 1,
    "totalPages": 3,
    "totalRows": 25,
    "limit": 10,
    "hasNextPage": true,
    "hasPrevPage": false,
    "showing": "1-10 of 25 items"
  },
  "data": {
    "id": 1,
    "name": "Special Week",
    "speed_aptitude": "A",
    "stamina_aptitude": "B",
    "images": [
      {
        "url": "http://localhost:3000/uploads/umas/placeholder-special-week.jpg"
      }
    ]
  }
}
```

## 🚀 Cara Install

### **Prerequisites**
- Node.js v16+ 
- Docker & Docker Compose
- PostgreSQL (atau via Docker)

### **Installation Steps**

1. **Clone Repository**
   ```bash
   git clone https://github.com/zakkutsu/node-uma-notes.git
   cd node-uma-notes-be
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment**
   Buat file `.env` di root directory:
   ```env
   # Database Configuration
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=uma_notes_db
   DB_USER=your_username
   DB_PASSWORD=your_password

   # Server Configuration
   PORT=3000
   NODE_ENV=development

   # Auto Seeding (set to 'true' for automatic seeding on startup)
   AUTO_SEED=true

   # Production Database (optional)
   PROD_DB_HOST=your_prod_host
   PROD_DB_NAME=your_prod_db
   PROD_DB_USERNAME=your_prod_user
   PROD_DB_PASSWORD=your_prod_password
   ```

4. **Start Database**
   ```bash
   docker-compose up -d
   ```

5. **Run Application**
   ```bash
   # Development mode dengan auto-reload
   npm run dev
   
   # Production mode
   npm start
   # Server akan berjalan di http://localhost:3000
   ```

6. **Verify Installation**
   ```bash
   curl http://localhost:3000/api/v1/seed
   # Should return database statistics
   ```

## � Isi Web & Fungsionalitas

### **Core Features**
- ✅ **Uma Database**: 5+ karakter dengan 16 aptitude types lengkap
- ✅ **Skills System**: Centralized skill database dengan 9 categories  
- ✅ **Support Cards**: Card collection dengan tier system (SSR/SR/R)
- ✅ **Inheritance System**: Parent-child breeding relationships
- ✅ **Factor Management**: Inheritance factors dengan star ratings
- ✅ **Image Upload**: Polymorphic image system untuk semua entitas

### **API Endpoints**

#### Base URL: `http://localhost:3000/api/v1`

#### **🏇 Umas Endpoints**
```http
GET    /umas              # Get all umas with pagination
GET    /umas/:id          # Get uma by ID
POST   /umas              # Create new uma (with image upload)
PUT    /umas/:id          # Update uma (with image upload)
DELETE /umas/:id          # Delete uma
```

#### **⚡ Skills Endpoints**
```http
GET    /skills            # Get all skills with pagination
GET    /skills/:id        # Get skill by ID
POST   /skills            # Create new skill (with image upload)
PUT    /skills/:id        # Update skill (with image upload)
DELETE /skills/:id        # Delete skill
```

#### **🃏 Support Cards & 🧬 Factors Endpoints**
```http
GET    /support-cards     # Get all support cards with pagination
GET    /support-cards/:id # Get support card by ID
GET    /factors           # Get all factors with pagination
GET    /factors/:id       # Get factor by ID
GET    /trained-umas      # Get all trained umas
GET    /trained-umas/:id  # Get trained uma by ID
```

### **Technical Features**
- ✅ **RESTful API**: Standard HTTP methods & status codes
- ✅ **Data Validation**: Comprehensive input validation
- ✅ **Auto Migration**: Database schema auto-sync
- ✅ **Seeder System**: Smart data population
- ✅ **Error Handling**: Robust error management
- ✅ **Pagination**: Query parameters: `?page=1&limit=10`
- ✅ **File Upload**: `multipart/form-data` dengan field `image_file`

### **Developer Experience**
- ✅ **Environment Config**: Flexible configuration via .env
- ✅ **Docker Support**: Containerized development
- ✅ **API Documentation**: Clear endpoint documentation
- ✅ **Code Structure**: Clean MVC + Services architecture

## 🏷️ Text Tag

**Backend**: `Node.js` `Express.js` `RESTful API` `MVC Architecture`  
**Database**: `PostgreSQL` `Sequelize ORM` `Database Migration` `Auto Seeding`  
**DevOps**: `Docker` `Docker Compose` `Environment Variables` `Production Ready`  
**Data**: `ERD Compliant` `Normalized Schema` `Junction Tables` `Foreign Keys`  
**Game**: `Uma Musume` `Pretty Derby` `Character Database` `Skill System` `Umamusume` `Horse Racing` `Gacha Game` `Anime` `Horse Girls`

## � Demo

### **Live API Testing**
Anda dapat menguji API menggunakan tools seperti:
- **Postman**: Untuk comprehensive API testing
- **curl**: Contoh request tersedia di bawah
- **Browser**: Untuk GET endpoints

### **Contoh Requests**
```bash
# Get all Uma characters
curl http://localhost:3000/api/v1/umas

# Get specific Uma with details  
curl http://localhost:3000/api/v1/umas/1

# Create new uma
curl -X POST http://localhost:3000/api/v1/umas \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Rice Shower",
    "star_initial": 3,
    "speed_aptitude": "A",
    "stamina_aptitude": "A",
    "power_aptitude": "B"
  }'

# Check seeder status
curl http://localhost:3000/api/v1/seed

# Manual seeding
curl -X POST http://localhost:3000/api/v1/seed/run
```

### **Database Statistics**
Setelah seeding sukses, database akan berisi:
- **5 Uma Characters** dengan aptitude lengkap (Special Week, Silence Suzuka, Tokai Teio, Vodka, Daiwa Scarlet)
- **10 Skills** dengan rarity & categories (Concentration, Pace Up, Positioning, Stamina Keeper, dll)
- **10 Factors** dengan color & star system (Speed factors, Stamina factors, Distance factors, dll)
- **12 Support Cards** dengan tier system (Various SSR, SR, dan R cards)
- **Placeholder Images** untuk semua entities

## 🔗 Frontend Repository

Repository frontend untuk aplikasi Uma Notes tersedia di:
**https://github.com/zakkutsu/uma-notes.git**

Frontend dibangun dengan teknologi modern dan menyediakan interface yang user-friendly untuk mengelola data Umamusume melalui API ini.

## 📝 Development Notes

### Database Schema
- **umas**: Tabel utama untuk Horse Girls
- **skills**: Tabel skills dengan type dan rarity
- **support_cards**: Tabel support cards
- **factors**: Tabel factors dengan color coding
- **trained_umas**: Tabel untuk tracking trained umas
- **images**: Tabel polymorphic untuk semua gambar
- **Junction Tables**: untuk many-to-many relationships

### Folder Structure
```
📁 node-uma-notes-be/
├── 📄 app.js                 # Main application entry (legacy)
├── 📄 index.js               # Current application entry point
├── 📄 package.json           # Dependencies dan scripts
├── 📄 docker-compose.yml     # PostgreSQL container setup
├── 📁 config/               # Database configuration
├── 📁 controllers/          # Route handlers
├── 📁 models/               # Sequelize models
├── 📁 routes/               # API route definitions
├── 📁 services/             # Business logic layer
├── 📁 helpers/              # Utility functions
├── 📁 middlewares/          # Custom middlewares
├── 📁 seeders/              # Database seeding
└── 📁 public/uploads/       # File upload storage
```

### Environment Variables
Pastikan semua environment variables di file `.env` sudah dikonfigurasi dengan benar sebelum menjalankan aplikasi.

---

**Happy Coding! 🏇✨**
