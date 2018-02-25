import { LOAD_CARDS, SET_CARD_TO_EDIT } from '../actions/cardsActions';

const initialState = {
  cards: [],
  cardToEdit: {}
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_CARDS:
      return { ...state, cards: action.cards };
    case SET_CARD_TO_EDIT:
      return { ...state, cardToEdit: action.card };
    default:
      return state;
  }
}