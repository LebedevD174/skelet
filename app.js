require('@babel/register');
const path = require('path');
const express = require('express');

/**
 * Routes
*/
const menuRoute = require('./routes/views/menu.route');
const catRoute = require('./routes/views/category.route');
const formRoute = require('./routes/views/formaddproduct.route');
const apiRotte = require('./routes/api/product.api.route')
/**
 * Middlewares
 */
const app = express();

const ssr = require('./middleware/ssr');

const PORT = process.env.PORT ?? 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(ssr);

app.use('/', menuRoute);
app.use('/categories', catRoute);
app.use('/formaddproduct', formRoute);
app.use('/api', apiRotte);

app.listen(PORT, () => { console.log('Сервер работает, порт', PORT); });
