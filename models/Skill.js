'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Skills extends Model {
    static associate(models) {
      // Skill memiliki banyak Uma (melalui tabel uma_skills)
      Skills.belongsToMany(models.umas, {
        through: 'uma_skills',
        foreignKey: 'skill_id',
        otherKey: 'uma_id'
      });
      
      // Skill memiliki banyak SupportCard (melalui tabel support_card_skills)
      Skills.belongsToMany(models.support_cards, {
        through: 'support_card_skills',
        foreignKey: 'skill_id',
        otherKey: 'support_card_id'
      });
    }
  }
  Skills.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    skill_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    skill_effect: {
      type: DataTypes.TEXT,
      allowNull: true  // Allow null temporarily for existing data
    },
    skill_rarity: {
      type: DataTypes.STRING,
      validate: { 
        isIn: [['Normal', 'Rare', 'Unique']] 
      },
      defaultValue: 'Normal'
    },
    skill_type: {
      type: DataTypes.STRING,
      validate: { 
        isIn: [['Recovery', 'Speed', 'Acceleration', 'Position', 'Stamina', 'Power', 'Guts', 'Wit', 'Strategy']] 
      }
    }
  }, {
    sequelize,
    modelName: 'skills',
    timestamps: false
  });
  return Skills;
};