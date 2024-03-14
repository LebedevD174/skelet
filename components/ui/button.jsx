const React = require('react');

module.exports = function Button({ name, classes, hrefItem ={} }) {
  console.log({ classes });
  return (
    <button className={`btn ${classes}`}>
      <a href={hrefItem}>
        {name}
      </a>

    </button>
  );
};
