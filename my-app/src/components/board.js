import React, { Component } from 'react';
import '../styles/board.css';
import Header from './header';
import ShowMenu from './show_menu';
import Lists from './lists';
/* eslint-disable */

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      username: ''
    }

    this.listHandler = this.listHandler.bind(this);
  }

  //Get all lists when components mounts
  componentDidMount() {
    var that = this;
    fetch(`http://localhost:3000/board/lists/${this.props.match.params.bid}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      let user = document.cookie.replace(/(?:(?:^|.*;\s*)name\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      that.setState({ lists: responseJson,
                      username: user }); 
    })
    .catch((error) => {
      console.error(error);
    });
  }

  //To update state when child component adds a new list
  listHandler(response) {
    var tempArray = this.state.lists.slice();
    tempArray.push(response);
    this.setState({lists: tempArray});
  }

  render() {	
    return (
      <div id="body">
        <Header userid={this.state.userid}/>
        <ShowMenu boardid={this.props.match.params.bid} action={this.listHandler} user={this.state.username}/>
        <div id="Listdiv">
          <ul id="list">
            {
              this.state.lists.map((list) =>
              <Lists 
                key={list.id}
                listid={list.id}
                listname={list.listname}
                user={this.state.username}/>
              )
            }
          </ul>
        </div>  
      </div>
    );
  }
}

export default Board;