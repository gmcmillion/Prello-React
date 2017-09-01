import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CreateAccount from './components/create_account';
import Boards from './components/boards';
import Board from './components/board';

class App extends Component {
  render() {
    return (
      <div>
        {/* <CreateAccount /> */}
        <Boards />
        {/* <Board /> */}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);