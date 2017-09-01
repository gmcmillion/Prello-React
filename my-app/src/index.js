import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import CreateAccount from './components/create_account';

class App extends Component {
  render() {
    return (
      <div>
        <CreateAccount />
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);