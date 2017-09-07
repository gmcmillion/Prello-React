import React, { Component } from 'react';
import '../styles/board.css';
import Header from './header';
import CardModal from './card_modal';
import AddCard from './add_new_card';
import ShowMenu from './show_menu';
import Lists from './lists';

class Board extends Component {
  render() {		
    return (
      <div id="body">
        <Header />
        <ShowMenu />
        <Lists />
        <CardModal />  
        <AddCard />
      </div>
    );
  }
}

export default Board;