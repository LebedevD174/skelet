const router = require('express').Router();
// const CategoryPage = require('../../components/Category');
const shopPage = require('../../components/Shop');
const Form = require('../../components/FormAddProduct');
const { Category, Product } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const html = res.renderComponent(Form);
    res.send(html);
  } catch ({ message }) {
    console.log(message);
  }
});

router.post('/', async (req, res) => {
    console.log(req.body);
  try {
    const { name, price, category_id } = req.body;
    console.log(name, price, category_id);
    const answer = await Product.create({ name, price, category_id, createdAt: new Date(), updatedAt: new Date() });
    // res.send(html);
    res.redirect('/products');
  } catch ({ message }) {
    console.log(message);
  }
});
module.exports = router;
