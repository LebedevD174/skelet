const React = require('react');

module.exports = function Button({ name, classes }) {
  console.log({classes});
  return (
    <button className={`btn `+classes}>
      {name}
    </button>
  );
};
