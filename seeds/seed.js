const sequelize = require('../config/connection');
const { Patient, Drugs, Conditions } = require('../models');

const patientData = require('./PatientData.json');
const drugsData = require('./DrugsData.json');
const conditionsData = require('./ConditionsData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Patient.bulkCreate(patientData);

  await Drugs.bulkCreate(drugsData);

  await Conditions.bulkCreate(conditionsData);

  process.exit(0);
};

seedDatabase();
