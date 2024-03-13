const React = require('react');
const Layout = require('../Layout');
const Product = require('../ui/Product');

module.exports = function Form() {
  return (
    <Layout title="Добавить продукт">
      <form style={{ margin: '50px' }} method="POST" action="/formaddproduct">
        <label htmlFor="name">Название продукта</label><br/>
        <input type="text" name="name" id="name" className="form-control" required /><br/>
        <label htmlFor="price">Цена</label><br/>
        <input type="text" name="price" id="price" className="form-control" required /><br/>
        <label htmlFor="category_id">Категория</label><br/>
        <input type="text" name="category_id" id="category_id" className="form-control" required /><br/>
        <button type="submit" className="btn">Отправить</button>

      </form>
    </Layout>
  );
};
