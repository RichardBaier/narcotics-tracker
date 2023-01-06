const router = require('express').Router();
const { Conditions, Patient, Drugs, Allergies, Surgeries } = require('../models');
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
    res.render('profile', { 
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
    res.render('profile', { 
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

// Surgery get request
router.get('/', async (req, res) => {
  try {
    // Get all drugs and JOIN with patient data
    const surgeryData = await Surgeries.findAll({
      include: [
        {
          model: Patient,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const surgeries = surgeryData.map((surgery) => surgery.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('profile', { 
      surgeries, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/surgery/:id', async (req, res) => {
  try {
    const surgeryData = await Surgeries.findByPk(req.params.id, {
      include: [
        {
          model: Patient,
          attributes: ['name'],
        },
      ],
    });

    const surgery = surgeryData.get({ plain: true });

    res.render('surgeries', {
      ...surgery,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Allergy get request
router.get('/', async (req, res) => {
  try {
    // Get all drugs and JOIN with patient data
    const allergyData = await Allergies.findAll({
      include: [
        {
          model: Patient,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const allergies = allergyData.map((allergy) => allergy.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('profile', { 
      allergies, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/allergy/:id', async (req, res) => {
  try {
    const allergyData = await Allergies.findByPk(req.params.id, {
      include: [
        {
          model: Patient,
          attributes: ['name'],
        },
      ],
    });

    const allergy = allergyData.get({ plain: true });

    res.render('allergies', {
      ...allergy,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const patientData = await Patient.findByPk(req.session.patient_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Conditions, Drugs }],
    });

    const patient = patientData.get({ plain: true });

    res.render('profile', {
      ...patient,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', (req,res) => {
  if (req.session.logged_in){
      res.redirect('/')
      return
  }
  res.render('signup')
})

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('profile');
    return;
  }

  res.render('login');
});

module.exports = router;
