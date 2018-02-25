import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../../components/CardList';
import AddCardForm from '../../components/AddCardForm';
import { loadCards, addCard, deleteCard, moveCard, setCardToEdit } from '../../actions/cardsActions';
import EditCardForm from '../../components/EditCardForm';


class App extends Component {
  componentWillMount() {
    this.props.loadCards();
  }

  render() {
    return (
      <div>
        <h1>Kanban Board</h1>
        <AddCardForm addCard={this.props.addCard}/>
        <EditCardForm />
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards.cards,
    cardToEdit: state.cards.cardToEdit
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
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;