/* eslint-disable no-unused-expressions */
import React from 'react';
import { Item } from './Item';

export const Notes = ({ notes, onRemove }) => {
  return (
    <div>
      <ul className='list-group '>
        {notes.map((note) => {
          return <Item note={note} onRemove={onRemove} key={note.id} />;
        })}
      </ul>
    </div>
  );
};
