'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Factors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Definisikan asosiasi di sini jika diperlukan
      // contoh: Factors.belongsTo(models.Umas);
    }
  }
  Factors.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    factor_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    factor_type: {
      type: DataTypes.STRING,
      validate: { 
        isIn: [['Stat', 'Distance', 'Surface', 'Strategy', 'Skill']] 
      }
    },
    color: {
      type: DataTypes.STRING,
      validate: { 
        isIn: [['Blue', 'Red', 'Green', 'White', 'Rainbow']] 
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
    modelName: 'factors',
    timestamps: false,
  });
  return Factors;
};