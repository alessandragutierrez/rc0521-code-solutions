import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfClicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
  }

  render() {
    const numberOfClicks = this.state.numberOfClicks;
    let className;
    if (numberOfClicks >= 18) {
      className = 'button button-18-clicks';
    } else if (numberOfClicks >= 15) {
      className = 'button button-15-clicks';
    } else if (numberOfClicks >= 12) {
      className = 'button button-12-clicks';
    } else if (numberOfClicks >= 9) {
      className = 'button button-9-clicks';
    } else if (numberOfClicks >= 6) {
      className = 'button button-6-clicks';
    } else if (numberOfClicks >= 3) {
      className = 'button button-3-clicks';
    } else if (numberOfClicks >= 0) {
      className = 'button button-0-clicks';
    }
    return (
      <div className="container">
        <button onClick={this.handleClick} className={className}>Hot Button</button>
        <h1 className="click-counter">{`${numberOfClicks} clicks`}</h1>
      </div>
    );
  }
}

export default HotButton;
