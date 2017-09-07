import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'text' ? target.value : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('USERNAME: ' + this.state.username 
      + ' EMAIL: '+ this.state.email
      + ' PASSWORD: '+ this.state.password
      + ' CONFIRM PASSWORD: '+ this.state.confirmPassword
    );
    event.preventDefault();
  }

  render() {		
    return (
      <div id="createAccount">
        <h1>Create a Prello Account</h1>
        <form id="register-form" onSubmit={this.handleSubmit}>
          <label>
            Username
            <input 
              value={this.state.username} 
              onChange={this.handleChange} 
              type="text" 
              id="username" 
              name="username" 
              placeholder="e.g., Peter Anteater" required/>
          </label>

          <label>
            Email
            <input 
              value={this.state.email} 
              onChange={this.handleChange} 
              type="email" 
              id="email" 
              name="email" 
              placeholder="e.g., anteater@uci.edu" required/>
          </label>

          <label>
            Password
            <input 
              value={this.state.password} 
              onChange={this.handleChange} 
              type="password" 
              id="password" 
              name="password" 
              placeholder="e.g., *********" required/>
          </label>

          <label>
            Confirm Password
            <input 
              value={this.state.confirmPassword} 
              onChange={this.handleChange} 
              type="password" 
              id="password-confirm" 
              name="confirmPassword" 
              placeholder="e.g., *********" required/>
          </label>

          <input id="register-btn" type="submit" value="Create New Account"></input>
        </form>
      </div>
    );
  }
}

export default Register;