/* eslint-disable no-unused-expressions */
import React from 'react';
import { Item } from './Item';

export const Notes = ({ notes }) => {
  return (
    <div>
      <ul className='list-group '>
        {notes.map((note) => {
          return <Item note={note} key={note.id} />;
        })}
      </ul>
    </div>
  );
};
