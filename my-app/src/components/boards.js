import React, { Component } from 'react';
import '../styles/boards.css';
import $ from 'jquery'; 
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
    var post_url = "http://localhost:3000/boards/listofboards";
    var self = this;
    $.ajax({
      url: post_url,
      type: "GET",
      dataType: 'json',
    }).done(function(response) {  
      console.log(response);
      self.setState({ boards: response });  
    });
  };

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