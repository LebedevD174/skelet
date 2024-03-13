const React = require('react');
const Layout = require('../Layout');

module.exports = function Category({ heading, categories }) {
  return (
    <Layout title="Categories">
      <h1>{heading}</h1>
      <div className="category flex column">
        {categories.map((cat) => (
          <a href={`/categories/${cat.id}`}>
            <div className='cat'>
              {cat.name}
            </div>
          </a>
        ))}
      </div>
    </Layout>
  );
};
