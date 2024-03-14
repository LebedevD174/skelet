const React = require('react');
const Layout = require('../Layout');
// const Product = require('../ui/Product');
const Form = require('../ui/Form');

module.exports = function FormUpdate({ title, product }) {
  return (
    <Layout title={title}>
      <h1>
        {title}
      </h1>
      <Form product={product} classes="update" />
    </Layout>
  );
};
