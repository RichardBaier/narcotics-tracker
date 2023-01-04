const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Allergies extends Model {}

Allergies.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    allergy_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    allergy_id: {
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
    modelName: 'allergies',
  }
);

module.exports = Allergies;