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
    skill_type: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'skills',
    timestamps: false
  });
  return Skills;
};