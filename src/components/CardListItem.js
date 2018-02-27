import React from 'react';

export default ({ id, title, priority, status, created_by, assigned_to, deleteCard, moveCard, setCardToEdit }) => {
  let left;
  let right;

  switch (status) {
    case `queue`:
      left = null;
      right = `progress`;
      break;
    case `progress`:
      left = `queue`;
      right = `done`;
      break;
    default:
      left = `progress`;
      right = null;
      break;
  }
  
  function handleDelete(event) {
    deleteCard(id);
  }

  function handleEdit(event) {
    setCardToEdit(id);
  }

  function handleMove(event) {
    moveCard(id, event.target.dataset.status);
  }

  return (
    <div className={`card_list_item ${status}_card`}>
      <p className='card_item_title'>{title}</p>
      <div className='priority_container'>
        <p>Priority:</p>
        <p className='capitalize'>{priority}</p>
      </div>
      <div className='assigned_by_container'>
        <p>Assigned by:</p>
        <p className='capitalize'>{created_by}</p>
      </div>
      <div className='card_item_bottom_row'>
        <div className='edit_delete_container'>
          <p onClick={handleEdit}>Edit</p>
          <p onClick={handleDelete}>Delete</p>
        </div>
        <div className='assigned_to_container'>
          <p>{assigned_to}</p>
        </div>
      </div>
      <br/>
      <div className='position_shift_buttons_container'>
        <button className='shift_left_button' data-status={left} onClick={handleMove}>Left</button>
        <button className='shift_right_button' data-status={right} onClick={handleMove}>Right</button>
      </div>
    </div>
  );
}