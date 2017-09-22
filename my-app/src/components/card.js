import React, { Component } from 'react';
import CardModal from './card_modal';
import { CSSTransitionGroup } from 'react-transition-group';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardModalActive: false,
      labelColors: []
    };

    this.toggleCardModal = this.toggleCardModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.colorMaker = this.colorMaker.bind(this);
  }

  toggleCardModal() {
    let menuState = !this.state.cardModalActive;
    this.setState({
      cardModalActive: menuState
    });
  }

  // DELETE card
  handleDelete(value) {
    this.props.delete(this.props.cardid);
  } 

  //Makes mini color labels for cards
  colorMaker(color) { 
    var tempArray = this.state.labelColors.slice();
    tempArray.push(color);
    this.setState({labelColors: tempArray});  
  }

  componentDidMount() {
    var that = this;

    // GET all labels for selected card
    fetch(`http://localhost:3000/board/labels/${this.props.cardid}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      that.setState({ labelColors: responseJson }); 
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {		
    let cardModal;
    if(this.state.cardModalActive) {
      cardModal = <CardModal 
                    cardName={this.props.cardname} 
                    action={this.toggleCardModal} 
                    cardauthor={this.props.cardauthor}
                    cardid={this.props.cardid}
                    delete={this.handleDelete}
                    user={this.props.user}
                    colorMaker={this.colorMaker}
                    /> 
    } else {
      cardModal = "";
    }
    return (
      <li>
        <button className="cardBtn" onClick = { this.toggleCardModal }> 
          <p>{this.props.cardname}</p>
          <div className="lab-colors">
            {this.state.labelColors.map((label, index) =>
              <p key={index} id={label.color} className='mini-label-color'></p>
            )}
          </div>
        </button>
        <CSSTransitionGroup transitionName = "cardModal" transitionEnterTimeout={1} transitionLeaveTimeout={1}>
          {cardModal}
        </CSSTransitionGroup>
      </li>
    );
  }
}

export default Card;