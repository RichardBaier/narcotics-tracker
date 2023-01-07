const router = require('express').Router();
const patientRoutes = require('./patientRoutes');
const conditionRoutes = require('./conditionRoutes');

router.use('/patients', patientRoutes);
router.use('/conditions', conditionRoutes);
// Do we need to add additional routes here??

module.exports = router;
