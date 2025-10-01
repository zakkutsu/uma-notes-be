'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SupportCards extends Model {
    static associate(models) {
      // SupportCard memiliki banyak Skill (melalui tabel SupportCard_Skills)
      SupportCards.belongsToMany(models.skills, {
        through: 'support_card_skills',
        foreignKey: 'support_card_id', // Pastikan ini snake_case
        otherKey: 'skill_id',
      });
    }
  }
  SupportCards.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    card_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rarity: DataTypes.STRING,
    card_type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'support_cards',
    timestamps: false,
  });
  return SupportCards;
};