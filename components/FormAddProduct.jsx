const React = require('react');
const Layout = require('./Layout');
const Product = require('./Product');

module.exports = function Form() {
  return (
    <Layout title="All tweets">
      <form style={{ margin: '50px' }} method="POST" action='/formaddproduct'>
        <label htmlFor="name">Название продукта</label>
        <input type="text" name="name" id="name" className="form-control" required />
        <label htmlFor="price">Цена</label>
        <input type="text" name="price" id="price" className="form-control" required />
        <label htmlFor="category_id">Категория</label>
        <input type="text" name="category_id" id="category_id" className="form-control" required />
        <button type="submit" className="btn btn-primary">Отправить</button>

      </form>
    </Layout>
  );
};
