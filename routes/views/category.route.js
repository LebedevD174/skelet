const router = require('express').Router();
const CategoryPage = require('../../components/Category');
const shopPage = require('../../components/Shop');
const { Category, Product } = require('../../db/models');
// const Form = require('../../components/Form');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    // console.log(categories);
    const html = res.renderComponent(CategoryPage, {
      heading: 'Категории',
      categories,
    });
    //   console.log(html)
    res.send(html);
  } catch ({ message }) {
    console.log(message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categories = await Category.findAll();
    const { id } = req.params;
    const prods = await Product.findAll({ where: { category_id: id } });
    const html = res.renderComponent(shopPage, {
      heading: `Продукты категория: ${categories[id - 1].name}`,
      prods,
    });
    res.send(html);
  } catch ({ message }) {
  }
});
module.exports = router;
