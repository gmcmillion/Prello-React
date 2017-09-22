import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      userid: '',
      password: '',
      fireRedirect: false
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
    event.preventDefault();
    const that = this;
    fetch('http://localhost:3000/users/login', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      // window.location.href = `/boards/${responseJson.id}`;
      that.setState({ 
        userid: responseJson.id,
        fireRedirect: true
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {		
    const { fireRedirect } = this.state;
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
        {fireRedirect && (
          <Redirect to={`/boards/${this.state.userid}`}/>
        )}
      </div>
    );
  }
}

export default Login;