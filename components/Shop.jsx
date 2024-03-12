const React = require('react');
const Layout = require('./Layout');
const Product = require('./Product');

module.exports = function Shop({ heading, prods }) {
  return (
    <Layout title="Shop">
      <h2>{heading}</h2>
      <div style={{
        display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: 10, margin: 10,
      }}
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
