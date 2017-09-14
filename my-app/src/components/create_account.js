import React, { Component } from 'react';
import Register from './register';
import Login from './login';
import '../styles/create_account.css';

class CreateAccount extends Component {
  render() {	
    return (
      <div id="reg-login-wrapper">
        <Register />
        <Login />
      </div>
    );
  }
}

export default CreateAccount;