// models/trained_uma.js

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TrainedUma extends Model {
    static associate(models) {
      // Relasi ke tabel Umas (satu TrainedUma berasal dari satu Uma dasar)
      TrainedUma.belongsTo(models.umas, {
        foreignKey: 'base_uma_id',
        as: 'base_uma'
      });

      // Relasi ke diri sendiri untuk orang tua pertama
      TrainedUma.belongsTo(models.trained_uma, {
        foreignKey: 'parent1_id',
        as: 'parent1'
      });

      // Relasi ke diri sendiri untuk orang tua kedua
      TrainedUma.belongsTo(models.trained_uma, {
        foreignKey: 'parent2_id',
        as: 'parent2'
      });
      
      // Relasi ke Factors (satu TrainedUma punya banyak Factor)
      TrainedUma.belongsToMany(models.factors, {
        through: 'trained_uma_factor',
        foreignKey: 'trained_uma_id',
        otherKey: 'factor_id',
        as: 'factors'
      });

      // Relasi ke Skills (satu TrainedUma mempelajari banyak Skill)
      TrainedUma.belongsToMany(models.skills, {
        through: 'trained_uma_acquired_skill',
        foreignKey: 'trained_uma_id',
        otherKey: 'skill_id',
        as: 'acquired_skills'
      });
    }
  }
  TrainedUma.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nickname: DataTypes.STRING,
    final_speed: DataTypes.INTEGER,
    final_stamina: DataTypes.INTEGER,
    final_power: DataTypes.INTEGER,
    final_guts: DataTypes.INTEGER,
    final_wit: DataTypes.INTEGER,
    base_uma_id: DataTypes.INTEGER,
    parent1_id: DataTypes.INTEGER,
    parent2_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'trained_uma',
  });
  return TrainedUma;
};