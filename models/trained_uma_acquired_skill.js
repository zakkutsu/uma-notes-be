// models/trained_uma_acquired_skill.js

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class trained_uma_acquired_skill extends Model {}
  trained_uma_acquired_skill.init({
  }, {
    sequelize,
    modelName: 'trained_uma_acquired_skill',
  });
  return trained_uma_acquired_skill;
};