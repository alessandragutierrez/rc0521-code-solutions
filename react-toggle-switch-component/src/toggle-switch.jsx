import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ switchOn: !this.state.switchOn });
  }

  checkState() {
    return (
      this.state.switchOn
        ? {
            toggleBackground: 'toggle-background toggle-background-on',
            toggleCircle: 'toggle-circle toggle-circle-on',
            toggleLabel: 'ON'
          }
        : {
            toggleBackground: 'toggle-background toggle-background-off',
            toggleCircle: 'toggle-circle toggle-circle-off',
            toggleLabel: 'OFF'
          }
    );
  }

  render() {
    const toggleSwitchState = this.checkState();
    return (
      <div className="container">
        <div className="toggle-switch-container">
          <button onClick={this.handleClick} className={toggleSwitchState.toggleBackground}>
            <div className={toggleSwitchState.toggleCircle}></div>
          </button>
        </div>
        <h1 className="toggle-label">{toggleSwitchState.toggleLabel}</h1>
      </div>
    );
  }
}

export default ToggleSwitch;
