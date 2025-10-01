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
    stars: DataTypes.INTEGER,
    factor_type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'factors',
    timestamps: false,
  });
  return Factors;
};