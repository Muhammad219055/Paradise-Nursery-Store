import React from 'react';

const Bill = ({ cartItems }) => {
  var totalBill = cartItems.reduce((sum, item) => sum + item.cost, 0);
  totalBill += 5.99

  return (
    <div className='bill'>
      {cartItems.map((item, index) => (
        <div key={index} className='item-row'>
          <h5>{item.name}</h5>
          <h5>${item.cost.toFixed(2)}</h5>
        </div>
      ))}
      <h5
      className='delivery'
      >
        Delivery: <span>$5.99</span>
      </h5>
      <h5
      className='total-bill'
      >Total Bill: <span>${totalBill.toFixed(2)}</span></h5>
    </div>
  );
};

export default Bill;
