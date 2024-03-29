const React = require('react');
const Layout = require('../Layout');
// const Product = require('../ui/Product');
const Form = require('../ui/Form');

module.exports = function FormCreate({ title, classes }) {
  return (
    <Layout title={title}>
      <h1>
        {title}
      </h1>
      <Form classes="create" />
    </Layout>
  );
};
