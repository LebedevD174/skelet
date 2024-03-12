const React = require('react');

module.exports = function Layout({ title, name }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* <link rel="stylesheet" href="/css/style.css" />
        <script src="/js/script.js" /> */}
      </head>
      <body>{name}</body>
    </html>
  );
};
