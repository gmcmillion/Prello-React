import React, { Component } from 'react';

class Login extends Component {
  render() {		
    return (
      <div id="login">
        <h1>Log in to Prello</h1>
        <form>
          <p>Username</p>
          <input type="text" id="user" placeholder="e.g., Peter Anteater" name="username" required/>
          
          <p>Password</p>
          <input type="password" id="pass" placeholder="e.g., *********" name="password" required/>

          <input id="login-btn" type="submit" value="Login"></input>
          <p id="forgotpass">Forgot your password? <a href="board.html">Reset it.</a></p>
        </form>
      </div>
    );
  }
}

export default Login;