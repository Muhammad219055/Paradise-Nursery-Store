import React from 'react';

const CODFields = ({ name, onNameChange }) => (
  <div className="credit-card-fields">
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
  </div>
);

export default CODFields;
