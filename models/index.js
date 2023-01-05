const Patient = require('./Patient');
const Drugs = require('./Drugs');
const Conditions = require('./Conditions');
const Allergies = require('./Allergies');
const Surgeries = require('./Surgeries');

//Setting up model relationships
Patient.hasMany(Conditions, {
  foreignKey: `condition_id`
});

Patient.hasMany(Drugs, {
  foreignKey: `drug_id`
});

Patient.hasMany(Allergies, {
  foreignKey: `allergy_id`
});

Patient.hasMany(Surgeries, {
  foreignKey: `surgery_id`
});


Drugs.belongsTo(Patient, {
   foreignKey: 'patient_id'
 });

Conditions.belongsTo(Patient, {
   foreignKey: `patient_id`
 });

Allergies.belongsTo(Patient, {
  foreignKey: `patient_id`
});

Surgeries.belongsTo(Patient, {
  foreignKey: `patient_id`
});

Conditions.hasMany(Drugs, {
  foreignKey: `drug_id`
});

module.exports = { Patient, Drugs, Conditions, Allergies, Surgeries };
