const router = require('express').Router();
const { Surgeries } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newSurgery = await Surgeries.create({
      ...req.body,
      surgery_id: req.session.surgery_id,
    });

    res.status(200).json(newSurgery);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const surgeryData = await Surgeries.destroy({
      where: {
        id: req.params.id,
        surgery_id: req.session.surgery_id,
      },
    });

    if (!surgeryData) {
      res.status(404).json({ message: 'No surgeries found with this id!' });
      return;
    }

    res.status(200).json(surgeryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;