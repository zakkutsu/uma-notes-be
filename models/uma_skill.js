// models/uma_skill.js

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Uma_Skills extends Model {}
  Uma_Skills.init({
    uma_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'umas',
        key: 'id'
      }
    },
    skill_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'skills',
        key: 'id'
      }
    },
    skill_category: {
      type: DataTypes.STRING,
      validate: { 
        isIn: [['unique', 'initial', 'awakening_lv2', 'awakening_lv3', 'awakening_lv4', 'awakening_lv5']] 
      },
      defaultValue: 'initial'
    }
  }, {
    sequelize,
    modelName: 'uma_skills',
    timestamps: false
  });
  return Uma_Skills;
};