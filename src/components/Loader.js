import React from 'react';

export const Loader = () => {
  return (
    <div className='text-center'>
      <div className='spinner-border text-secondary' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
};