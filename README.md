# Backend REST API untuk Uma Musume Notes

Ini adalah backend service untuk aplikasi Uma Musume Notes, sebuah database online yang didedikasikan untuk game Uma Musume Pretty Derby. Backend ini bertanggung jawab untuk menyediakan, mengelola, dan menyajikan semua data yang dibutuhkan oleh aplikasi frontend.

## 🎯 Tujuan Proyek

Tujuan utama dari proyek ini adalah untuk membuat sebuah REST API yang andal, terstruktur, dan skalabel. API ini akan menjadi tulang punggung aplikasi, menyajikan data karakter, skill, support card, dan data terkait lainnya dengan efisien.

Arsitektur yang digunakan adalah MVC + Services untuk memastikan pemisahan tanggung jawab yang jelas antara logika HTTP (Controller), logika bisnis (Service), dan akses data (Model).

## ✨ Fitur & Isi API

API ini menyediakan endpoint untuk mengelola berbagai entitas data dalam game, termasuk:

- **Umas**: Manajemen data karakter dasar, termasuk statistik dan aptitude.
- **Skills**: Database terpusat untuk semua jenis skill (unik, warisan, support card, dll).
- **Support Cards**: Manajemen data untuk semua support card.
- **Factors**: Manajemen data untuk faktor warisan (inheritance).
- **Data Relasional**: Kemampuan untuk mengambil data secara terkait (contoh: mendapatkan data satu karakter beserta semua skill bawaannya).

## 🛠️ Tech Stack & Tag

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Environment**: Docker, Docker Compose
- **Konfigurasi**: Dotenv (.env)
- **Konvensi**: Lowercase & Snake Case untuk model dan database

## 📚 Dokumentasi API (Contoh Endpoint)

Dokumentasi API lengkap akan dibuat menggunakan Postman atau Swagger. Berikut adalah contoh endpoint utama yang tersedia:

- `GET /api/umas`

  Mengambil daftar semua karakter Uma.

- `GET /api/umas/:id`

  Mengambil detail satu karakter Uma beserta skill bawaannya.

- `GET /api/support-cards`

  Mengambil daftar semua Support Card.

- `GET /api/support-cards/:id`

  Mengambil detail satu Support Card beserta skill yang diberikannya.

## 🚀 Cara Instalasi dan Setup

Berikut adalah langkah-langkah untuk menjalankan proyek ini di lingkungan pengembangan lokal.

### Prasyarat

- Node.js (v16 atau lebih baru)
- Docker
- Docker Compose

### Langkah-langkah

1.  **Clone repository ini:**

    ```bash
    git clone [URL_REPOSITORY_ANDA]
    cd node-uma-notes-be
    ```

2.  **Instal dependensi proyek:**

    ```bash
    npm install
    ```

3.  **Setup Environment Variables:**
    Buat file `.env` di root direktori. Anda bisa menyalin dari `env.example` jika ada, atau buat baru dengan isi berikut. Sesuaikan nilainya jika perlu.

    ```env
    # Konfigurasi Database
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=user
    DB_PASSWORD=password
    DB_NAME=uma_db
    ```

4.  **Sesuaikan Konfigurasi Docker:**
    Pastikan nilai `POSTGRES_USER`, `POSTGRES_PASSWORD`, dan `POSTGRES_DB` di dalam file `docker-compose.yml` sesuai dengan yang ada di file `.env` Anda.

5.  **Jalankan Database dengan Docker:**
    Perintah ini akan membuat dan menjalankan container PostgreSQL di background.

    ```bash
    docker-compose up -d
    ```

6.  **Jalankan Aplikasi Backend:**
    Server akan berjalan dan terhubung ke database di Docker.

    ```bash
    npm run dev
    ```

    Anda akan melihat pesan "Database tersinkronisasi." dan "Server berjalan di http://localhost:3000" di terminal Anda.

## 🎬 Demo

[Link ke dokumentasi Postman atau Swagger akan ditambahkan di sini.]