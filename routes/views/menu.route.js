const router = require('express').Router();
const Shop = require('../../components/Shop');
const Layout = require('../../components/Layout')
const Categories = require('../../components/Category')
const { Product, Category } = require('../../db/models');
// const Form = require('../../components/Form');

router.get('/', async (req, res) => {
  const content = 'Добро пожаловать в наш магазин, выберите категорию'
  const html = res.renderComponent(Layout, {
    heading: 'Главная страница',
    content
  });
    //   console.log(html)
  res.send(html);
});

router.get('/products', async (req, res) => {
  const prods = await Product.findAll();
  const html = res.renderComponent(Shop, {
    heading: 'Продукты',
    prods,
  });
  //   console.log(html)
  res.send(html);
});
// router.get('/categories', async (req, res) => {
//   const categories = await Category.findAll();
//   console.log(categories);
//   const html = res.renderComponent(Categories, {
//     heading: 'Категории',
//     categories,
//   });
//   //   console.log(html)
//   res.send(html);
// });
router.get('/orders', async (req, res) => {
  const orders = await Category.findAll();
  const html = res.renderComponent(Shop, {
    heading: 'Заказы',
    orders,
  });
  //   console.log(html)
  res.send(html);
});

module.exports = router;
