// models/support_card_skill.js

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SupportCard_Skills extends Model {}
  SupportCard_Skills.init({
    support_card_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'support_cards',
        key: 'id'
      }
    },
    skill_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'skills',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'support_card_skills',
    timestamps: false
  });
  return SupportCard_Skills;
};