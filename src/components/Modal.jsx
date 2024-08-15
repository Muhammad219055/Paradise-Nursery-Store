import React from 'react';

const Modal = ({ isOpen, onClose, name }) => {
  if (!isOpen) return null;

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <h2>Thank you {name}!</h2>
        <p>Your order will be dispatched as soon as possible.</p>
        <p> Stay green !</p>
        <button className='modal-close-button' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
