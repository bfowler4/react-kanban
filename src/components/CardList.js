import React from 'react';
import CardListItem from './CardListItem';

export default ({ cards, status, deleteCard, moveCard, setCardToEdit }) => {
  cards = cards.filter(card => card.status === status);

  return (
    <div className='card_list'>
      <h3>{status}</h3>
      <ul>
        {cards.length ? 
          cards.map(card => {
            return <CardListItem
              key={card.id}
              id={card.id}
              title={card.title}
              priority={card.priority}
              status={card.status}
              created_by={card.created_by}
              assigned_to={card.assigned_to}
              deleteCard={deleteCard}
              moveCard={moveCard}
              setCardToEdit={setCardToEdit}
            />
          }) :
          <li><h3>(No cards)</h3></li>}
      </ul>
    </div>
  );
}