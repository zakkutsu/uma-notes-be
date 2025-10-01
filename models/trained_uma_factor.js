// models/trained_uma_factor.js

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TrainedUma_Factors extends Model {}
  TrainedUma_Factors.init({
    trained_uma_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'trained_umas',
        key: 'id'
      }
    },
    factor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'factors',
        key: 'id'
      }
    },
    star_rating: {
      type: DataTypes.INTEGER,
      validate: { 
        min: 1, 
        max: 3 
      },
      defaultValue: 1
    }
  }, {
    sequelize,
    modelName: 'trained_uma_factors',
    timestamps: false
  });
  return TrainedUma_Factors;
};