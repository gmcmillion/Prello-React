import React, { Component } from 'react';
import '../styles/boards.css';
import Header from './header';
import AddBoard from './add_new_board';
import BoardList from './boards_list';

class Boards extends Component {
  render() {		
    return (
      <div>
        <Header />
        <div id="mainbody">
          <div id="welcome">
            <h1>Welcome [USERNAME HERE]</h1>
          </div>
          <AddBoard />
          <BoardList />
        </div>
      </div>
    );
  }
}

export default Boards;