import React from 'react';

export const Item = ({ note }) => {
  return (
    <>
      <li className='list-group-item note'>
        <div>
          <strong> {note.title}</strong>
          <small>{new Date().toLocaleDateString()}</small>
        </div>
        <button type='button' className='btn btn-outline-danger btn-sm'>
          &times;
        </button>
      </li>
    </>
  );
};
