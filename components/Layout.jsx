const React = require('react');
const Navbar = require('./ui/Navbar');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/css/reset_style.css" />
        <link rel="stylesheet" href="/css/index.css" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
      <script src="/scripts/delete.js" defer />
    </html>
  );
};
