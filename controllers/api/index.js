const router = require('express').Router();
const patientRoutes = require('./patientRoutes');
const conditionRoutes = require('./conditionRoutes');
const surgeriesRoutes = require('./surgeriesRoutes');
const allergiesRoutes = require('./allergiesRoutes');
const drugsRoutes = require('./allergiesRoutes');


router.use('/patients', patientRoutes);
router.use('/conditions', conditionRoutes);
router.use('/drugs', drugsRoutes);
router.use('/surgeries', surgeriesRoutes);
router.use('/allergies', allergiesRoutes);

module.exports = router;
