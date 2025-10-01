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

### **API Documentation**
Endpoint utama yang tersedia:

#### **Umas (Characters)**
- `GET /api/umas` - List semua karakter Uma Musume
- `GET /api/umas/:id` - Detail karakter dengan skills & associations

#### **Skills** 
- `GET /api/skills` - Database terpusat semua skill
- `GET /api/skills/:id` - Detail skill dengan rarity & type

#### **Support Cards**
- `GET /api/support-cards` - List semua support card  
- `GET /api/support-cards/:id` - Detail card dengan skills yang diberikan

#### **Factors**
- `GET /api/factors` - List inheritance factors
- `GET /api/factors/:id` - Detail factor dengan color & star rating

#### **Seeder Control**
- `GET /api/seed` - Status seeding & statistik data
- `POST /api/seed/run` - Manual trigger seeding
- `DELETE /api/seed/clear` - Clear all seeded data
- `POST /api/seed/reset` - Reset & re-seed database

## ✨ Fitur Utama

### **🗄️ Comprehensive Database**
- **10+ Karakter Uma** dengan 16 aptitude types lengkap
- **Skills Database** dengan rarity system (Normal/Rare/Unique)
- **Support Cards** dengan tier system (SSR/SR/R)
- **Inheritance Factors** dengan color coding & star ratings

### **🔄 Smart Auto Seeder**
- **Duplicate Prevention**: Tidak akan membuat data duplikat
- **Environment Control**: Toggle via `AUTO_SEED=true/false`
- **Manual Control**: API endpoints untuk kontrol seeding
- **Data Validation**: Comprehensive field validation

### **⚡ Production Ready**
- **PostgreSQL**: Database production-grade
- **Sequelize ORM**: Advanced query capabilities
- **Docker Support**: Containerized deployment
- **Error Handling**: Robust error management
- **Environment Config**: Flexible configuration system

## 🖼️ Preview Singkat

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
  "success": true,
  "data": {
    "id": 1,
    "name": "Special Week",
    "speed_aptitude": "A",
    "stamina_aptitude": "B",
    "skills": [
      {
        "skill_name": "Full Throttle",
        "skill_rarity": "Unique",
        "skill_category": "unique"
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
   ```bash
   cp .env.example .env
   # Edit .env sesuai konfigurasi database
   ```

4. **Start Database**
   ```bash
   docker-compose up -d
   ```

5. **Run Application**
   ```bash
   npm start
   # Server akan berjalan di http://localhost:3000
   ```

6. **Verify Installation**
   ```bash
   curl http://localhost:3000/api/seed
   # Should return database statistics
   ```

## 🎯 Isi Web & Fungsionalitas

### **Core Features**
- ✅ **Uma Database**: 10+ karakter dengan data lengkap
- ✅ **Skills System**: Centralized skill database dengan categories  
- ✅ **Support Cards**: Card collection dengan tier system
- ✅ **Inheritance System**: Parent-child breeding relationships
- ✅ **Factor Management**: Inheritance factors dengan star ratings

### **Technical Features**
- ✅ **RESTful API**: Standard HTTP methods & status codes
- ✅ **Data Validation**: Comprehensive input validation
- ✅ **Auto Migration**: Database schema auto-sync
- ✅ **Seeder System**: Smart data population
- ✅ **Error Handling**: Robust error management

### **Developer Experience**
- ✅ **Environment Config**: Flexible configuration via .env
- ✅ **Docker Support**: Containerized development
- ✅ **API Documentation**: Clear endpoint documentation
- ✅ **Code Structure**: Clean MVC + Services architecture

## 🏷️ Tech Tags

**Backend**: `Node.js` `Express.js` `RESTful API` `MVC Architecture`  
**Database**: `PostgreSQL` `Sequelize ORM` `Database Migration` `Auto Seeding`  
**DevOps**: `Docker` `Docker Compose` `Environment Variables` `Production Ready`  
**Data**: `ERD Compliant` `Normalized Schema` `Junction Tables` `Foreign Keys`  
**Game**: `Uma Musume` `Pretty Derby` `Character Database` `Skill System`

## 🎬 Demo

### **Live API Testing**
```bash
# Get all Uma characters
curl http://localhost:3000/api/umas

# Get specific Uma with details  
curl http://localhost:3000/api/umas/1

# Check seeder status
curl http://localhost:3000/api/seed

# Manual seeding
curl -X POST http://localhost:3000/api/seed/run
```

### **Database Statistics**
Setelah seeding sukses, database akan berisi:
- **5 Uma Characters** dengan aptitude lengkap
- **10 Skills** dengan rarity & categories
- **10 Factors** dengan color & star system  
- **12 Support Cards** dengan tier system

## 🚀 Fitur Lanjutan yang Bisa Dikembangkan

### **Phase 3: Frontend Development** 
- [ ] **React/Vue Frontend**: Modern UI untuk browse database
- [ ] **Search & Filter**: Advanced filtering by aptitude, rarity, etc
- [ ] **Character Builder**: Tool untuk planning builds & inheritance
- [ ] **Responsive Design**: Mobile-friendly interface

### **Phase 4: Advanced Features**
- [ ] **User Authentication**: Login system untuk save builds
- [ ] **Favorites System**: Save favorite combinations
- [ ] **Breeding Calculator**: Optimal breeding path suggestions
- [ ] **Stats Calculator**: Training outcome predictions
- [ ] **Export Features**: PDF/Excel export untuk builds

### **Phase 5: Production Enhancement**
- [ ] **Caching Layer**: Redis untuk performance optimization
- [ ] **Rate Limiting**: API protection & throttling
- [ ] **Monitoring**: Performance & usage analytics
- [ ] **CDN Integration**: Static asset optimization
- [ ] **Database Optimization**: Query optimization & indexing

### **Phase 6: Community Features**
- [ ] **Build Sharing**: Community build database
- [ ] **Rating System**: User rating untuk builds
- [ ] **Comment System**: Discussion untuk strategies
- [ ] **Tournament Tracker**: Race result tracking
- [ ] **Meta Analysis**: Popular builds & trends

---

**Built with ❤️ for Uma Musume Pretty Derby community**