const router = require('express').Router();
const { Drugs } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newDrug = await Drugs.create({
      ...req.body,
      drug_id: req.session.drugs_id,
    });

    res.status(200).json(newDrug);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const drugsData = await Drugs.destroy({
      where: {
        id: req.params.id,
        drugs_id: req.session.drugs_id,
      },
    });

    if (!drugsData) {
      res.status(404).json({ message: 'No medications found with this id!' });
      return;
    }

    res.status(200).json(drugsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;