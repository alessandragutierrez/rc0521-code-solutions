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

  selectClass() {
    const numberOfClicks = this.state.numberOfClicks;
    return (
      numberOfClicks >= 18
        ? 'button button-18-clicks'
        : numberOfClicks >= 15
          ? 'button button-15-clicks'
          : numberOfClicks >= 12
            ? 'button button-12-clicks'
            : numberOfClicks >= 9
              ? 'button button-9-clicks'
              : numberOfClicks >= 6
                ? 'button button-6-clicks'
                : numberOfClicks >= 3
                  ? 'button button-3-clicks'
                  : 'button button-0-clicks'
    );
  }

  render() {
    const className = this.selectClass();
    return (
      <div className="container">
        <button onClick={this.handleClick} className={className}>Hot Button</button>
        <h1 className="click-counter">{`${this.state.numberOfClicks} clicks`}</h1>
      </div>
    );
  }
}

export default HotButton;
