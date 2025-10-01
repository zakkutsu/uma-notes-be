'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Umas extends Model {
    // Definisikan metode asosiasi di sini
    static associate(models) {
      // Uma memiliki banyak Skill (melalui tabel Uma_Skills)
      Umas.belongsToMany(models.skills, {
        through: 'uma_skills',      // Nama tabel penghubung
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
    star_initial: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    // Stats aptitude (bawaan setiap Uma)
    speed_aptitude: {
      type: DataTypes.CHAR(1),
      validate: { isIn: [['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G']] }
    },
    stamina_aptitude: {
      type: DataTypes.CHAR(1), 
      validate: { isIn: [['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G']] }
    },
    power_aptitude: {
      type: DataTypes.CHAR(1),
      validate: { isIn: [['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G']] }
    },
    guts_aptitude: {
      type: DataTypes.CHAR(1),
      validate: { isIn: [['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G']] }
    },
    wit_aptitude: {
      type: DataTypes.CHAR(1),
      validate: { isIn: [['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G']] }
    },
    // Surface aptitude (Permukaan lari)
    turf_aptitude: {
      type: DataTypes.CHAR(1),
      validate: { isIn: [['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G']] }
    },
    dirt_aptitude: {
      type: DataTypes.CHAR(1),
      validate: { isIn: [['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G']] }
    },
    // Distance aptitude (Jarak lari)
    sprint_aptitude: {
      type: DataTypes.CHAR(1),
      validate: { isIn: [['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G']] }
    },
    mile_aptitude: {
      type: DataTypes.CHAR(1),
      validate: { isIn: [['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G']] }
    },
    medium_aptitude: {
      type: DataTypes.CHAR(1),
      validate: { isIn: [['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G']] }
    },
    long_aptitude: {
      type: DataTypes.CHAR(1),
      validate: { isIn: [['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G']] }
    },
    // Strategy aptitude (Strategi lari)
    runner_aptitude: {
      type: DataTypes.CHAR(1),
      validate: { isIn: [['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G']] }
    },
    leader_aptitude: {
      type: DataTypes.CHAR(1),
      validate: { isIn: [['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G']] }
    },
    betweener_aptitude: {
      type: DataTypes.CHAR(1),
      validate: { isIn: [['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G']] }
    },
    chaser_aptitude: {
      type: DataTypes.CHAR(1),
      validate: { isIn: [['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G']] }
    }
  }, {
    sequelize,
    modelName: 'umas',
    timestamps: false
  });
  return Umas;
};