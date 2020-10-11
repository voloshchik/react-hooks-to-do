import React from 'react';

function Alert({ alert }) {
  if (!alert) {
    return null;
  }
  return (
    <div className={`alert alert-${alert.type || 'warning'} alert-dismissible `} role='alert'>
      <strong>Внимание</strong> {alert.text}
      <button type='button' className='close' aria-label='Close'>
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  );
}

export default Alert;
