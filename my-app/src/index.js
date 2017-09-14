import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateAccount from './components/create_account';
import Boards from './components/boards';
import Board from './components/board';

class App extends Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };

    this.updateUser = this.updateUser.bind(this);
  }

  //To update state with username when user logs in
  //Function will be passed down to child component
  updateUser(response) {
    this.setState({username: response});
  }
  */

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={CreateAccount}/>
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