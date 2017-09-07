import React, { Component } from 'react';

class Register extends Component {
  render() {		
    return (
      <div id="createAccount">
        <h1>Create a Prello Account</h1>
        <form id="register-form">
          <p>Username</p>
          <input type="text" id="username" name="username" placeholder="e.g., Peter Anteater" required/>

          <p>Email</p>
          <input type="email" id="email" name="email" placeholder="e.g., anteater@uci.edu" required/>

          <p>Password</p>
          <input type="password" id="password" name="password" placeholder="e.g., *********" required/>
      
          <p>Confirm Password</p>
          <input type="password" id="password-confirm" name="confirm password" placeholder="e.g., *********" required/>
      
          <input id="register-btn" type="submit" value="Create New Account"></input>
        </form>
      </div>
    );
  }
}

export default Register;