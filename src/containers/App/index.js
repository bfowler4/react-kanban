import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';

import Header from '../../components/Header';
import CardList from '../../components/CardList';
import AddCardForm from '../../components/AddCardForm';
import EditCardForm from '../../components/EditCardForm';
import { loadCards, addCard, deleteCard, moveCard, setCardToEdit, displayAddCard } from '../../actions/cardsActions';


class App extends Component {
  constructor(props) {
    super(props);

    this.handleDisplayAddCard = this.handleDisplayAddCard.bind(this);
    this.handleHideAddCard = this.handleHideAddCard.bind(this);
  }

  componentWillMount() {
    this.props.loadCards();
  }

  handleDisplayAddCard() {
    this.props.displayAddCard(true);
  }

  handleHideAddCard(event) {
    if (!event || event.target.className === 'hide_popup_button' || event.target.className === 'popup_background') {
      this.props.displayAddCard(false);
    }
  }

  render() {
    return (
      <div className='kanban_board'>
        <Header handleDisplayAddCard={this.handleDisplayAddCard}/>
        <div className='lists_container'>
          <CardList 
            cards={this.props.cards} 
            status='queue' 
            deleteCard={this.props.deleteCard}
            moveCard={this.props.moveCard}
            setCardToEdit={this.props.setCardToEdit}
          />
          <CardList 
            cards={this.props.cards} 
            status='progress'
            deleteCard={this.props.deleteCard} 
            moveCard={this.props.moveCard} 
            setCardToEdit={this.props.setCardToEdit}
          />
          <CardList 
            cards={this.props.cards} 
            status='done'
            deleteCard={this.props.deleteCard}
            moveCard={this.props.moveCard}
            setCardToEdit={this.props.setCardToEdit}
          />
        </div>
        {this.props.displayEditCardFlag ?
          <EditCardForm /> : null
        }
        {this.props.displayAddCardFlag ? 
          <AddCardForm 
            addCard={this.props.addCard}
            hideCardForm={this.handleHideAddCard}
          /> :
          null
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards.cards,
    cardToEdit: state.cards.cardToEdit,
    displayAddCardFlag: state.cards.displayAddCard,
    displayEditCardFlag: state.cards.displayEditCard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCards: () => {
      dispatch(loadCards());
    },
    addCard: card => {
      dispatch(addCard(card));
    },
    deleteCard: id => {
      dispatch(deleteCard(id));
    },
    moveCard: (id, status) => {
      dispatch(moveCard(id, status));
    },
    setCardToEdit: id => {
      dispatch(setCardToEdit(id));
    },
    displayAddCard: flag => {
      dispatch(displayAddCard(flag));
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;