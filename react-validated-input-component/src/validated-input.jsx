import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.passwordErrors = {};
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
    this.passwordErrors =
      this.state.value === ''
        ? {
            icon: 'fas fa-times',
            messageContent: 'A password is required.'
          }
        : this.state.value.length < 8
          ? {
              icon: 'fas fa-times',
              messageContent: 'Your password is too short.'
            }
          : {
              icon: 'fas fa-check',
              messageContent: ''
            };
  }

  render() {
    this.checkPassword();
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label className="password-label">
          Password
          <br />
          <input type="password" name="password" value={this.state.value} onChange={this.handleChange} className="password-input"/>
          <span className={this.passwordErrors.icon}></span>
          <p className="error-message">{this.passwordErrors.messageContent}</p>
        </label>
      </form>
    );
  }
}

export default ValidatedInput;
