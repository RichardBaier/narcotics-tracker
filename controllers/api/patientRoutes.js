const router = require('express').Router();
const { Patient } = require('../../models');


// Create User
router.post('/', async (req, res) => {
  try {
    const patientData = await Patient.create(req.body);

    req.session.save(() => {
      req.session.patient_id = patientData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


// Validate Sign In
router.post('/login', async (req, res) => {
  try {
    // Email verification
    const patientData = await Patient.findOne({ where: { email: req.body.email } });

    if (!patientData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Password Validation
    const validPassword = await patientData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.patient_id = patientData.id;
      req.session.logged_in = true;
      
      res.json({ user: patientData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Destroy session on logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
