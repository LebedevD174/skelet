const React = require('react');

module.exports = function Button({ icon = '', name }) {
  return (

    <button
      style={{
        width: 100,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        // flexDirection: 'column',
        background: '#4682B4',
        color: 'white',
        padding: 5,
        margin: '5px-15px',
        border: 'solid black 2px',
        borderRadius: 10,
        marginBottom: 10,
      }}
      className="delete"
    >
 
      {name}
    </button>

  );
};
