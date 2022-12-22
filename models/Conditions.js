const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Conditions extends Model {}

Conditions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    condition_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    years: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    condition_id: {
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
    modelName: 'conditions',
  }
);

module.exports = Conditions;
