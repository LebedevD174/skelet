const React = require('react');
const Layout = require('../Layout');
const Product = require('../ui/Product');

module.exports = function Shop({ heading, prods }) {
  return (
    <Layout title="Shop">
      <h1>{heading}</h1>
      <div
        className="container flex wrap"
      >
        {prods.map((prod) => (
          <div key={prod.id}>
            {/* {prod.name} */}
            <Product product={prod} />
          </div>
        ))}
      </div>
    </Layout>
  );
};
