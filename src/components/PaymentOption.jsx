import React from 'react';

const PaymentOption = ({ id, icon, label, checked, onChange }) => (
  <div className='payment-option'>
    <input
      type='radio'
      id={id}
      name='paymentMethod'
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={id}>
      {icon}
      {label}
    </label>
  </div>
);

export default PaymentOption;
