const sequelize = require('../config/connection');
const { Patient, Drugs, Conditions, Allergies, Surgeries } = require('../models');

const patientData = require('./PatientData.json');
const drugsData = require('./DrugsData.json');
const conditionsData = require('./ConditionsData.json');
const allergiesData = require(`./AllergiesData.json`);
const surgeryData = require(`./SurgeriesData.json`);


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Patient.bulkCreate(patientData);

  await Drugs.bulkCreate(drugsData);

  await Conditions.bulkCreate(conditionsData);

  await Allergies.bulkCreate(allergiesData);

  await Surgeries.bulkCreate(surgeryData);

  process.exit(0);
};

seedDatabase();
