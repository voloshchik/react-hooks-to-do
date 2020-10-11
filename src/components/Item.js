import React from 'react';

export const Item = ({ note, onRemove }) => {
  return (
    <>
      <li className='list-group-item note'>
        <div>
          <strong> {note.title}</strong>
          <small>{new Date().toLocaleDateString()}</small>
        </div>
        <button
          type='button'
          onClick={() => onRemove(note.id)}
          className='btn btn-outline-danger btn-sm'
        >
          &times;
        </button>
      </li>
    </>
  );
};
