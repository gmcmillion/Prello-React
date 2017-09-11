import React, { Component } from 'react';
import '../styles/boards.css';
import $ from 'jquery'; 
import Header from './header';
import AddBoard from './add_new_board';
import BoardList from './boards_list';

class Boards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: this.props.match.params.id,
      username: ''
    };
  }

  //Get all boards when components mounts
  componentDidMount() {
    var post_url = "http://localhost:3000/boards/listofboards";
    $.ajax({
      url: post_url,
      type: "GET",
      dataType: 'json',
    }).done(function(response) {  
      console.log(response);

      // TODO: Populate board components 
    });
  };

  render() {    
    return (
      <div>
        <Header />
        <div id="mainbody">
          <div id="welcome">
            <h1>Welcome [USERNAME HERE]</h1>
          </div>
          <AddBoard authorid={this.state.userid} username={this.state.username}/>
          <BoardList />
        </div>
      </div>
    );
  }
}

export default Boards;