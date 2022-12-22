const Patient = require('./Patient');
const Drugs = require('./Drugs');
//const Conditions = require('./Conditions');

//Setting up model relationships
// Patient.hasMany(Conditions, {
//   //foreignKey: `condition_id`
// });

Patient.hasMany(Drugs, {
  //foreignKey: `drug_id`
});


Drugs.belongsTo(Patient, {
   foreignKey: 'patient_id'
 });

//  Conditions.belongsTo(Patient, {
//    foreignKey: `patient_id`
//  });

// Conditions.hasMany(Drugs, {
//   foreignKey: `drug_id`
// });

module.exports = { Patient, Drugs };
