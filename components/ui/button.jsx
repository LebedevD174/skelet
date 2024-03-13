const React = require('react');

module.exports = function Button({ name, classes }) {
  return (
    <button className={`btn ${{classes}}`}>
      {name}
    </button>
  );
};
