import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      count: 0
    };
    this.handlePlayPauseClick = this.handlePlayPauseClick.bind(this);
    this.handleWatchFaceClick = this.handleWatchFaceClick.bind(this);
  }

  handlePlayPauseClick() {
    this.setState(
      state => {
        if (state.isOn) {
          clearInterval(this.intervalId);
        } else {
          this.intervalId = setInterval(() => this.tick(), 1000);
        }
        return { isOn: !this.state.isOn };
      }
    );
  }

  tick() {
    this.setState({ count: this.state.count + 1 });
  }

  handleWatchFaceClick() {
    if (!this.state.isOn) {
      this.setState({ count: 0 });
    }
  }

  checkState() {
    return (
      this.state.isOn
        ? {
            playPauseClass: 'fas fa-pause',
            watchFaceClass: 'watch-face'
          }
        : {
            playPauseClass: 'fas fa-play',
            watchFaceClass: 'watch-face hover'
          }
    );
  }

  render() {
    const stopwatchState = this.checkState();
    return (
      <div className="container">
        <div onClick={this.handleWatchFaceClick} className={stopwatchState.watchFaceClass}>
          <h1 className="count">{this.state.count}</h1>
        </div>
        <div onClick={this.handlePlayPauseClick} className={stopwatchState.playPauseClass}></div>
      </div>
    );
  }
}

export default Stopwatch;
