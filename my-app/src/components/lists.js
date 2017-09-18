import React, { Component } from 'react';
import _ from 'lodash';
import Card from './card';
import { CSSTransitionGroup } from 'react-transition-group';

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addCardMenuActive: false,
      cardValue: '',
      cards: []
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleCardChange = this.handleCardChange.bind(this);
    this.handleCardSubmit = this.handleCardSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.cardHandler = this.cardHandler.bind(this);
  }

  toggleMenu() {
    let menuState = !this.state.addCardMenuActive;
    this.setState({
      addCardMenuActive: menuState
    });
  }

  handleCardChange(event) {
    this.setState({cardValue: event.target.value});
  }

  cardHandler(response) {
    var tempArray = this.state.cards.slice();
    tempArray.push(response);
    this.setState({cards: tempArray});
  }

  //Get all cards when list component mounts
  componentDidMount() {
    var that = this;
    fetch(`http://localhost:3000/board/cards/${this.props.listid}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      that.setState({ cards: responseJson }); 
    })
    .catch((error) => {
      console.error(error);
    });
  }

  //Post new card
  handleCardSubmit(event) {
    event.preventDefault();
    this.toggleMenu();

    let that = this;
    fetch('http://localhost:3000/board/newcard', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cardname: this.state.cardValue,
        listid: this.props.listid,
        cardauthor: this.props.user
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      that.cardHandler(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
  }

    // DELETE card
    handleDelete(value) {
      var that = this;
      fetch(`http://localhost:3000/board/deletecard/${value}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        const index = _.findIndex(that.state.cards, {id: value}); //Find index in array
        let tempArray = that.state.cards.slice();   //Copy cards array
        _.pullAt(tempArray, [index])                //Remove card out of array
        that.setState({ cards: tempArray });        //Update state with new cards array
      })
      .catch((error) => {
        console.error(error);
      });
    } 

  render() {		
    let cardMenu;
    if(this.state.addCardMenuActive) {
      cardMenu =  <div className="addCardDropdown carddropdown-content" id="popup">
                    <form className="submit-btn-form" onSubmit={this.handleCardSubmit}>
                      <input onChange={this.handleCardChange} type="text" className="newCardInput" autoComplete="off" placeholder="Enter Description..."/>
                      <button type="submit" className="submit-btn">Submit</button>
                    </form>
                  </div>
    } else {
      cardMenu = "";
    }
    return (
      <li>
        <div className="outer-li">
          <div className="ListHeader">
            <p>{this.props.listname}</p>
            <button type="button" className="xbtn" value={this.props.listid}>&times;</button>
          </div>
          <div>
            <ul className="inner-list">
            {
              this.state.cards.map((card) =>
              <Card 
                key={card.id}
                cardid={card.id}
                cardname={card.cardname}
                cardauthor={this.props.user}
                delete={this.handleDelete}/>
              )
            }
            </ul>
            <div className="carddropdown">
              <button type="button" className="addNewCardbtn" onClick = { this.toggleMenu }>Add a card...</button>
                <CSSTransitionGroup transitionName = "cardMenu" transitionEnterTimeout={1} transitionLeaveTimeout={1}>
                  {cardMenu}
                </CSSTransitionGroup>
            </div >
          </div>
        </div>
      </li>
    );
  }
}

export default Lists;