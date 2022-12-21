const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Patient extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Patient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    allergies: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    surgeries: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // conditions: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: {
    //     model: `conditions`,
    //     key: `condition_name`,
    //   },
    // },
    // drugs: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: {
    //     model: `drugs`,
    //     key: `drug_name`,
    //   },
    // },

  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'patient',
  }
);

module.exports = Patient;
