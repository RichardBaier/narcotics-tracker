const Patient = require('./Patient');
const Drugs = require('./Drugs');
const Conditions = require('./Conditions');

//Setting up model relationships
Patient.hasMany(Conditions, {
  foreignKey: `name`
});

Patient.hasMany(Drugs, {
  foreignKey: `name`
});

Drugs.belongsTo(Patient, {
  foreignKey: 'id'
});

Conditions.belongsTo(Patient, {
  foreignKey: `id`
});

Conditions.hasMany(Drugs, {
  foreignKey: `name`
});

module.exports = { Patient, Drugs, Conditions };
