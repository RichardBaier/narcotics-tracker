const router = require('express').Router();
const { Conditions } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newCondition = await Conditions.create({
      ...req.body,
      conditions_id: req.session.conditions_id,
    });

    res.status(200).json(newCondition);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const conditionsData = await Conditions.destroy({
      where: {
        id: req.params.id,
        conditions_id: req.session.conditions_id,
      },
    });

    if (!conditionsData) {
      res.status(404).json({ message: 'No conditions found with this id!' });
      return;
    }

    res.status(200).json(conditionsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
