const React = require('react');
const Layout = require('./Layout');

module.exports = function Product({ product }) {
  const { name } = product;
  const { price } = product;
  return (
    <Layout title="Product">
      <div style={{
        width: 150,
        height: 100,
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        background: '#FFaa50',
        color: '#FFFAF9',
        padding: 5,
        margin: '5px-15px',
        border: 'solid black 2px',
        borderRadius: '20%',
        marginBottom: 10,
      }}
      >
        <div style={{ width: 140, height: 60, textSize: 50 }}>
          <div>
            Название продукта:
          </div>
          <div>
            {name}
          </div>
          {/* {product.name} */}
        </div>
        <div style={{
          width: 140, height: 50, textSize: 40, color: '#FFFAF995',
        }}
        >
          {`Цена: ${price}руб.`}
          {/* {product.price} */}
        </div>
      </div>
    </Layout>
  );
};
