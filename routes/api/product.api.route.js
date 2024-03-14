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

router.put('/:id/update', async (req, res) => {
  const { id } = req.params;
  const { name, price, category_id } = req.body;
  try {
    const data = await Product.update({ name, price, category_id }, { where: { id } });
    res.status(200).json({ message: 'success', data });
  } catch (error) {
    res.json({ message: 'Не твоя', error });
  }
});

module.exports = router;
