const router = require('express').Router();
const Shop = require('../../components/Shop');
const { Product} = require('../../db/models');
// const Form = require('../../components/Form');

router.get('/', async (req, res) => {

  const prods = await Product.findAll();
  const html = res.renderComponent(Shop, {
    heading: 'All products',
    prods,
  });
//   console.log(html)
  res.send(html);
});

module.exports = router