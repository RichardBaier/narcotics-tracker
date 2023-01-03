const router = require('express').Router();
const { Conditions, Patient, Drugs } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all conditions and JOIN with patient data
    const conditionData = await Conditions.findAll({
      include: [
        {
          model: Patient,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const conditions = conditionData.map((condition) => condition.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      conditions, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/condition/:id', async (req, res) => {
  try {
    const conditionData = await Conditions.findByPk(req.params.id, {
      include: [
        {
          model: Patient,
          attributes: ['name'],
        },
      ],
    });

    const condition = conditionData.get({ plain: true });

    res.render('conditions', {
      ...condition,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    // Get all drugs and JOIN with patient data
    const drugData = await Drugs.findAll({
      include: [
        {
          model: Patient,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const drugs = drugData.map((drug) => drug.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      drugs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/drug/:id', async (req, res) => {
  try {
    const drugData = await Drugs.findByPk(req.params.id, {
      include: [
        {
          model: Patient,
          attributes: ['name'],
        },
      ],
    });

    const drug = drugData.get({ plain: true });

    res.render('medications', {
      ...drug,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const patientData = await Patient.findByPk(req.session.patient_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Conditions, Drugs }],
    });

    const patient = patientData.get({ plain: true });

    res.render('patient', {
      ...patient,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
