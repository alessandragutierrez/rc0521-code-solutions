import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  checkPassword() {
    return (
      this.state.value === ''
        ? {
            icon: 'fas fa-times icon icon-red',
            messageContent: 'A password is required.'
          }
        : this.state.value.length < 8
          ? {
              icon: 'fas fa-times icon icon-red',
              messageContent: 'Your password is too short.'
            }
          : {
              icon: 'fas fa-check icon icon-green',
              messageContent: ''
            }
    );
  }

  render() {
    const passwordErrors = this.checkPassword();
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label className="password-label">
          Password
          <br />
          <input type="password" name="password" value={this.state.value} onChange={this.handleChange} className="password-input"/>
          <span className={passwordErrors.icon}></span>
          <p className="error-message">{passwordErrors.messageContent}</p>
        </label>
      </form>
    );
  }
}

export default ValidatedInput;
