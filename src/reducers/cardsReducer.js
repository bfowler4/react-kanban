import { LOAD_CARDS, SET_CARD_TO_EDIT, DISPLAY_ADD_CARD_FLAG, DISPLAY_EDIT_CARD_FLAG } from '../actions/cardsActions';

const initialState = {
  cards: [],
  cardToEdit: {},
  displayAddCard: false,
  displayEditCard: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_CARDS:
      return { ...state, cards: action.cards };
    case SET_CARD_TO_EDIT:
      return { ...state, cardToEdit: action.card };
    case DISPLAY_ADD_CARD_FLAG:
      return { ...state, displayAddCard: action.flag };
    case DISPLAY_EDIT_CARD_FLAG:
      return { ...state, displayEditCard: action.flag };
    default:
      return state;
  }
}