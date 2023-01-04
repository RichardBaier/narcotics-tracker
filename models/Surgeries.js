const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Surgeries extends Model {}

Surgeries.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    surgery_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surgery_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "patient",
        key: "id" 
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'surgeries',
  }
);

module.exports = Surgeries;