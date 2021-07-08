import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton() {
  return <button className="button">Click Me!</button>;
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
