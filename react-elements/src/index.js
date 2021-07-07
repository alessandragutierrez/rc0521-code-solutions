import React from 'react';
import ReactDOM from 'react-dom';

const reactElement = React.createElement(
  'h1',
  {},
  'Hello, React!'
);

ReactDOM.render(
  reactElement,
  document.getElementById('root')
);
