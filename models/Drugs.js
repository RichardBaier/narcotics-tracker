const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Drugs extends Model {}

Drugs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      allowNull: false,
      autoIncrement: true,
    },
    drug_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dose: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    frequency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    patient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "patient",
        key: "id" 
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'drugs',
  }
);

module.exports = Drugs;
