const router = require('express').Router();
const patientRoutes = require('./patientRoutes');
const conditionRoutes = require('./conditionRoutes');
const surgeriesRoutes = require('./surgeriesRoutes');
const allergiesRoutes = require('./allergiesRoutes');
const drugsRoutes = require('./allergiesRoutes');


router.use('/patients', patientRoutes);
router.use('/conditions', conditionRoutes);
<<<<<<< HEAD
router.use('/drugs', drugsRoutes);
router.use('/surgeries', surgeriesRoutes);
router.use('/allergies', allergiesRoutes);
=======
// Do we need to add additional routes here??
>>>>>>> 5ce3bd8392dac372b961dbcdfe9a6b76f71d8327

module.exports = router;
