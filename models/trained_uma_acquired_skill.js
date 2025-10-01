// models/trained_uma_acquired_skill.js

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TrainedUma_AcquiredSkills extends Model {}
  TrainedUma_AcquiredSkills.init({
    trained_uma_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'trained_umas',
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
    modelName: 'trained_uma_acquired_skills',
    timestamps: false
  });
  return TrainedUma_AcquiredSkills;
};