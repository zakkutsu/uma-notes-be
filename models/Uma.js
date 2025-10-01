'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Umas extends Model {
    // Definisikan metode asosiasi di sini
    static associate(models) {
      // Uma memiliki banyak Skill (melalui tabel Uma_Skills)
      Umas.belongsToMany(models.skills, {
        through: 'Uma_Skills',      // Nama tabel penghubung
        foreignKey: 'uma_id',       // Kunci di tabel penghubung yang merujuk ke Umas
        otherKey: 'skill_id'        // Kunci di tabel penghubung yang merujuk ke Skills
      });
    }
  }
  Umas.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Tambahkan semua kolom aptitude sesuai ERD Anda
    turf_aptitude: DataTypes.CHAR,
    dirt_aptitude: DataTypes.CHAR,
    // ...dan seterusnya
  }, {
    sequelize,
    modelName: 'umas',
    timestamps: false
  });
  return Umas;
};