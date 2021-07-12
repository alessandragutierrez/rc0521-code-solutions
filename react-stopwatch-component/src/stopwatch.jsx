import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatchOn: false,
      count: 0
    };
    this.handlePlayPauseClick = this.handlePlayPauseClick.bind(this);
  }

  handlePlayPauseClick() {
    this.setState({ stopwatchOn: !this.state.stopwatchOn });
  }

  // tick() {
  //   this.setState(state => ({ count: this.state.count + 1 }));
  // }

  // startCounting() {
  //   this.interval = setInterval(() => this.tick(), 1000);
  // }

  // stopCounting() {
  //   return clearInterval(this.interval);
  // }

  checkState() {
    // if (this.state.stopwatchOn) {
    //   this.startCounting();
    // } else {
    //   this.stopCounting();
    // }
    return (
      this.state.stopwatchOn
        ? 'fas fa-pause'
        : 'fas fa-play'
    );
  }

  render() {
    // console.log(this.state);
    const stopwatchState = this.checkState();
    return (
      <div className="container">
        <div className="watch-face">
          <h1 className="count">{this.state.count}</h1>
        </div>
        <div onClick={this.handlePlayPauseClick} className={stopwatchState}></div>
      </div>
    );
  }
}

export default Stopwatch;
