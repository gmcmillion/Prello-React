import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateAccount from './components/create_account';
import Boards from './components/boards';
import Board from './components/board';

// Connect to db

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={CreateAccount} />
            <Route path="/boards" component={Boards} />
            <Route path="/board" component={Board} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);