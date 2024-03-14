const router = require('express').Router();
const Shop = require('../../components/pages/Shop');
const Layout = require('../../components/Layout');
const Categories = require('../../components/pages/Category');
const { Product, Category } = require('../../db/models');
const FormUp = require('../../components/pages/FormUpdateProduct');

router.get('/', async (req, res) => {
  const content = 'Добро пожаловать в наш магазин, выберите категорию';
  const html = res.renderComponent(Layout, {
    heading: 'Главная страница',
    content,
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

router.get('/product/:id/update', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ where: { id } });
    const html = res.renderComponent(FormUp, {
      title: 'Редактировать продукт',
      product,
    });
    res.send(html);
  } catch ({ message }) {
    console.log(message);
  }
});

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
