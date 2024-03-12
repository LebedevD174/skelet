require('@babel/register');

const express = require('express');

/**
 * Routes
*/
const shopRoute = require('./routes/views/shop.route');
/**
 * Middlewares
 */
const app = express();

const ssr = require('./middleware/ssr');

const PORT = process.env.PORT ?? 3000;

app.use(ssr);

app.use('/', shopRoute);

app.listen(PORT, () => { console.log('Сервер работает, порт', PORT); });
