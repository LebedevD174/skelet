require('@babel/register');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Layout = require('./Model');

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
  // res.send('nudes');
  const home = React.createElement(Layout, {
    title: 'My site',
    name: 'John',
  });

  const html = ReactDOMServer.renderToStaticMarkup(home);

  const document = `<!DOCTYPE html>${html}`;
  res.send(document);
});

app.listen(PORT, () => { console.log('Сервер работает, порт', PORT); });
