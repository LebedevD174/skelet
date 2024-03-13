const React = require('react');
const path = require('path');
const Button = require('./button');

module.exports = function Product({ product }) {
  const { name } = product;
  const { price } = product;
  const { id } = product;
  return (
    <div
      className="product flex column"
      data-id={id}
    >
      <div>
        <div>
          {name}
        </div>
        {/* {product.name} */}
      </div>
      <div>
        {`Цена: ${price}руб.`}
      </div>
      <div>
        <Button name="Редактировать" />
        <Button name="Удалить" class="delete" />
      </div>
    </div>
  );
};
