// models/uma_skill.js

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Uma_Skills extends Model {}
  Uma_Skills.init({
  }, {
    sequelize,
    modelName: 'uma_skills',
  });
  return Uma_Skills;
};