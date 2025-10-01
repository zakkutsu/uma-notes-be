// models/trained_uma_factor.js

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class trained_uma_factor extends Model {}
  trained_uma_factor.init({
  }, {
    sequelize,
    modelName: 'trained_uma_factors',
  });
  return trained_uma_factor;
};