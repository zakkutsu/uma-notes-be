// models/image.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      // Kita akan definisikan relasinya dari sisi model lain
    }
  }
  Image.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageable_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageable_type: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'image',
    timestamps: false
  });
  return Image;
};