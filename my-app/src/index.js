import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateAccount from './components/create_account';
import Boards from './components/boards';
import Board from './components/board';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={CreateAccount} />
            <Route exact path="/boards/:id" component={Boards} />
            <Route exact path="/board/:bid" component={Board} />
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