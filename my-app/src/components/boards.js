import React, { Component } from 'react';
import '../styles/boards.css';
import Header from './header';
import AddBoard from './add_new_board';
import NewBoard from './new_board';
/* eslint-disable */

class Boards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: this.props.match.params.id,
      username: '',
      boards: []
    };

    this.boardHandler = this.boardHandler.bind(this);
  }

  //Get all boards when components mounts
  componentDidMount() {
    var that = this;
    fetch(`http://localhost:3000/boards/${this.state.userid}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      let user = document.cookie.replace(/(?:(?:^|.*;\s*)name\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      that.setState({ boards: responseJson,
                      username: user }); 
    })
    .catch((error) => {
      console.error(error);
    });
  }

  //To update state when child component adds a new board
  boardHandler(response) {
    var tempArray = this.state.boards.slice();
    tempArray.push(response);
    this.setState({boards: tempArray});
  }

  render() {
    return (
      <div>
        <Header userid={this.state.userid}/>
        <div id="mainbody">
          <div id="welcome">
            <h1>Welcome {this.state.username}</h1>
          </div>
          <AddBoard authorid={this.state.userid} username={this.state.username} action={this.boardHandler}/>
          <div>
            <div id="personalBoards">
              <img src={require('../images/personal.png')} alt="personal" />
              <h3>Personal Boards</h3>
            </div>
            <div id="boardsList">
              <ul className="ul-boards">
                {
                  this.state.boards.map((board) =>
                    <NewBoard 
                      key={board.id} 
                      boardid={board.id}
                      boardname={board.boardname}
                    />
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Boards;