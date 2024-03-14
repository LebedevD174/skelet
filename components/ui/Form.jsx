const React = require('react');
// const Layout = require('../Layout');
// const Product = require('./Product');

module.exports = function Form({ product = {}, classes}) {
  return (
    <form style={{ margin: '50px' }} method="POST" className={classes}>
      <label htmlFor="name">Название продукта</label>
      <br />
      <input type="text" name="name" id="name" className="form-control" required value={product.name} />
      <br />
      <label htmlFor="price">Цена</label>
      <br />
      <input type="text" name="price" id="price" className="form-control" required value={product.price} />
      <br />
      <label htmlFor="category_id">Категория</label>
      <br />
      <input type="text" name="category_id" id="category_id" className="form-control" required value={product.category_id} />
      <br />
      <button type="submit" className={product !== {} ? `btn product${product.id}` : 'btn'}>Отправить</button>

    </form>
  );
};
