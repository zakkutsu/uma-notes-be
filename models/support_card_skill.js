// models/support_card_skill.js

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SupportCard_Skills extends Model {}
  SupportCard_Skills.init({
  }, {
    sequelize,
    modelName: 'SupportCard_Skills',
  });
  return SupportCard_Skills;
};