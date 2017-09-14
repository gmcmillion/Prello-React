import React, { Component } from 'react';
import '../styles/boards.css';
import Header from './header';
import AddBoard from './add_new_board';
import NewBoard from './new_board';

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
    fetch('http://localhost:3000/boards/listofboards', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      that.setState({ boards: responseJson }); 
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
        <Header />
        <div id="mainbody">
          <div id="welcome">
            <h1>Welcome [USERNAME HERE]</h1>
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
                      boardname={board.boardname}/>
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