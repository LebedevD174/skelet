const router = require('express').Router();
const { Product } = require('../../db/models');

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Product.destroy({ where: { id } });
    res.status(200).json({ message: 'success', data });
  } catch (error) {
    res.json({ message: 'Не твоя', error });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, img, content } = req.body;
  try {
    const data = await Tweet.update({ name, img, content }, { where: { id } });
    res.status(200).json({ message: 'success', data });
  } catch (error) {
    res.json({ message: 'Не твоя', error });
  }
});

module.exports = router;
