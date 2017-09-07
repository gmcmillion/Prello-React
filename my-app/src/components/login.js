import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
    alert('USERNAME: ' + this.state.username + ' PASSWORD: '+ this.state.password);
    event.preventDefault();
  }

  render() {		
    return (
      <div id="login">
        <h1>Log in to Prello</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input 
              value={this.state.username} 
              onChange={this.handleChange} 
              type="text" 
              id="user" 
              placeholder="e.g., Peter Anteater" 
              name="username" required/>
          </label>
          
          <label>
            Password
            <input 
              value={this.state.password } 
              onChange={this.handleChange} 
              type="password" 
              id="pass" 
              placeholder="e.g., *********" 
              name="password" required/>
          </label>

          <input 
            id="login-btn" 
            type="submit" 
            value="Login"/>
          
          <p id="forgotpass">Forgot your password? <a href="board.html">Reset it.</a></p>
        </form>
      </div>
    );
  }
}

export default Login;