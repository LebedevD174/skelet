const React = require('react');
const path = require('path');
const Button = require('./ui/button');

module.exports = function Product({ product }) {
  const { name } = product;
  const { price } = product;
  const { id } = product;
  return (
    <div
      style={{
        width: 150,
        // height: 100,
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        background: '#4682B4',
        color: '#E0FFFF',
        padding: 5,
        margin: '5px-15px',
        border: 'solid black 2px',
        borderRadius: 10,
        marginBottom: 10,
      }}
      className="product"
      data-id={id}
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
      <div
        style={{
          width: 140, height: 50, textSize: 40, color: '#E0FFFF90',
        }}

      >
        {`Цена: ${price}руб.`}
        {/* {product.price} */}
      </div>
      <div>
        {/* <Button name="Редактировать" icon="public/icons/red" />
        <Button name="Удалить" icon="public/icons/cross" /> */}
        <Button name="Редактировать" />
        <Button name="Удалить" />
      </div>
    </div>
  );
};
