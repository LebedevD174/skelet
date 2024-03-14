require('@babel/register');
const router = require('express').Router();
/**
 * Routes
*/
const menuRoute = require('./views/menu.route');
const catRoute = require('./views/category.route');
const formRoute = require('./views/formaddproduct.route');
const apiProdRotte = require('./api/product.api.route');

router.use('/', menuRoute);
router.use('/categories', catRoute);
router.use('/formaddproduct', formRoute);
router.use('/api/product', apiProdRotte);

module.exports = router;
