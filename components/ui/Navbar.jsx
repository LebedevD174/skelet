const React = require('react');

module.exports = function Menu() {
  return (
    <div className='head flex'
    >
      <div><a href="/">Главная</a></div>
      <div><a href="/products">Продукты</a></div>
      <div><a href="/categories">Категории</a></div>
      <div><a href="/orders">Заказы</a></div>
      <div><a href="/formaddproduct">Добавить продукт</a></div>
    </div>
  );
};
