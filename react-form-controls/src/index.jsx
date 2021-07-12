import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  render() {
    return (
      <form>
        <label>
          Email
          <input></input>
        </label>
        <button>Sign Up</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.querySelector('#root')
);
