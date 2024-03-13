const React = require('react');
const Layout = require('./Layout');

module.exports = function Category({ heading, categories }) {
  return (
    <Layout title="Categories">
      <h2>{heading}</h2>
      <div style={{
        display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', flexWrap: 'wrap', flexDirection: 'column', padding: 10, marginBottom: 20, marginLeft: 50,
      }}
      >
        {categories.map((cat) => (
          <a href={`/categories/${cat.id}`}>
            <div style={{
              width: 300,
              height: 100,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // flexDirection: 'column',
              background: '#00FFFF',
              color: '#BC8F8F',
              padding: 5,
              margin: '5px-15px',
              border: 'solid black 2px',
              borderRadius: 50,
              marginBottom: 10,
            }}
            >
              {cat.name}
            </div>
          </a>
        ))}
      </div>
    </Layout>
  );
};
