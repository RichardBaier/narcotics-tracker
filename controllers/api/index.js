const router = require('express').Router();
const patientRoutes = require('./patientRoutes');
const conditionRoutes = require('./conditionRoutes');

router.use('/patients', patientRoutes);
router.use('/conditions', conditionRoutes);

module.exports = router;
