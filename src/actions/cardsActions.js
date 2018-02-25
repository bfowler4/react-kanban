import 'whatwg-fetch';

const HOST = `http://localhost:8080/api`;

export const LOAD_CARDS = `LOAD_CARDS`;
export const ADD_CARD = `ADD_CARD`;
export const DELETE_CARD = `DELETE_CARD`;
export const SET_CARD_TO_EDIT = `SET_CARD_TO_EDIT`;
export const EDIT_CARD = `EDIT_CARD`;

export const loadCards = () => {
  return dispatch => {
    return fetch(`${HOST}/kanban`)
    .then(response => response.json())
    .then(cards => {
      dispatch({
        type: LOAD_CARDS,
        cards: cards
      });
    })
    .catch(err => console.log(err));
  }
}

export const addCard = card => {
  return dispatch => {
    return fetch(`${HOST}/kanban`, {
      method: `POST`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(card)
    })
    .then(success => {
      dispatch(loadCards());
    });
  }
}

export const deleteCard = id => {
  return dispatch => {
    return fetch(`${HOST}/kanban/${id}`, {
      method: `DELETE`
    })
    .then(success => {
      dispatch(loadCards());
    });
  }
}

export const setCardToEdit = id => {
  return dispatch => {
    return fetch(`${HOST}/kanban/${id}`)
    .then(response => response.json())
    .then(card => {
      dispatch({
        type: SET_CARD_TO_EDIT,
        card: card
      });
    });
  }
}

export const editCard = card => {
  return dispatch => {
    return fetch(`${HOST}/kanban/${card.id}`, {
      method: `PUT`,
      headers: {
        'Content-Type': `application/json`
      },
      body: JSON.stringify(card)
    })
    .then(success => {
      dispatch(loadCards());
    });
  }
}

export const moveCard = (id, status) => {
  return dispatch => {
    return fetch(`${HOST}/kanban/${id}`, {
      method: `PUT`,
      headers: {
        'Content-Type': `application/json`
      },
      body: JSON.stringify({ status })
    })
    .then(success => {
      dispatch(loadCards());
    });
  }
}
