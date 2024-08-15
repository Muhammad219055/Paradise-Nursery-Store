import React from 'react';

const CreditCardFields = ({ name, onNameChange }) => (
  <div className='credit-card-fields'>
    <div className="name-address">
      <label htmlFor="Name">
        Your Full name: 
        <input
          type="text"
          value={name}
          onChange={onNameChange}
          placeholder='John Doe'
        />
      </label>
      <label htmlFor="Address">
        Enter your full address
        <input
          type="text"
          placeholder='house 1, str 2, block c, NewYork '
        />
      </label>
    </div>
    <div className='form-field'>
      <label htmlFor='cardNumber'>Card Number</label>
      <input type='text' id='cardNumber' placeholder='1234 5678 9012 3456' />
    </div>
    <div className='form-field'>
      <label htmlFor='nameOnCard'>Name on Card</label>
      <input type='text' id='nameOnCard' placeholder='John Doe' />
    </div>
    <div className="date-cvv">
      <div className='form-field'>
        <label htmlFor='expiryDate'>Expiry Date</label>
        <input type='text' id='expiryDate' placeholder='MM/YY' />
      </div>
      <div className='form-field'>
        <label htmlFor='cvv'>CVV</label>
        <input type='text' id='cvv' placeholder='123' />
      </div>
    </div>
  </div>
);

export default CreditCardFields;
