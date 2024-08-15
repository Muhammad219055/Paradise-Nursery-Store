import React, { useState } from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Modal from './Modal';
import PaymentOption from './PaymentOption';
import CreditCardFields from './CreditCardFields';
import CODFields from './CODFields';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';

const Payment = () => {
  const [name, setName] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('creditCard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePaymentChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePlaceOrder = () => {
    if (name.trim() !== '') {
      setIsModalOpen(true);
    }
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
    dispatch(clearCart());
    navigate('/');
  };

  return (
    <div className='payment-options'>
      <h3>Select Payment Method</h3>

      <PaymentOption
        id='creditCard'
        icon={<CreditCardIcon style={{ marginRight: '8px' }} />}
        label='Credit Card'
        checked={selectedPaymentMethod === 'creditCard'}
        onChange={() => handlePaymentChange('creditCard')}
      />

      <PaymentOption
        id='cod'
        icon={<AccountBalanceWalletIcon style={{ marginRight: '8px' }} />}
        label='Cash on Delivery (COD)'
        checked={selectedPaymentMethod === 'cod'}
        onChange={() => handlePaymentChange('cod')}
      />

      {selectedPaymentMethod === 'creditCard' && (
        <CreditCardFields name={name} onNameChange={handleNameChange} />
      )}

      {selectedPaymentMethod === 'cod' && (
        <CODFields name={name} onNameChange={handleNameChange} />
      )}

      <button className='place-order' onClick={handlePlaceOrder}>
        Place Order
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        name={name}
      />
    </div>
  );
};

export default Payment;
