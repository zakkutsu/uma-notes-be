// models/Skill.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class skills extends Model {
    static associate(models) {
      // Definisikan asosiasi di sini
      skills.belongsToMany(models.umas, { through: 'Uma_Skills', foreignKey: 'skill_id', otherKey: 'uma_id' });
      skills.belongsToMany(models.support_cards, { through: 'SupportCard_Skills', foreignKey: 'skill_id', otherKey: 'support_card_id' });
    }
  }
  skills.init({
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
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'skills',
    timestamps: false
  });
  return skills;
};