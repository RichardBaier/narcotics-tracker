const router = require('express').Router();
const { Allergies } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newAllergy = await Allergies.create({
      ...req.body,
      allergy_id: req.session.allergy_id,
    });

    res.status(200).json(newAllergy);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const allergyData = await Allergies.destroy({
      where: {
        id: req.params.id,
        allergy_id: req.session.allergy_id,
      },
    });

    if (!allergyData) {
      res.status(404).json({ message: 'No allergies found with this id!' });
      return;
    }

    res.status(200).json(allergyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;