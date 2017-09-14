import React, { Component } from 'react';
import '../styles/board.css';
import Header from './header';
import CardModal from './card_modal';
import AddCard from './add_new_card';
import ShowMenu from './show_menu';
import Lists from './lists';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    }
  }

  render() {	
    return (
      <div id="body">
        <Header />
        <ShowMenu boardid={this.props.match.params.bid}/>
        <Lists />
        <CardModal />  
        <AddCard />
      </div>
    );
  }
}

export default Board;