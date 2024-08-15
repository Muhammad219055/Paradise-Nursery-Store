import React from 'react';
import { useSelector } from 'react-redux';
import Logo from '../components/logo';
import Bill from '../components/Bill';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Payment from '../components/Payment';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className='checkout-page'>
      <Logo />
      <div className="receipt">
        <h2>Your order summery:</h2>
        <Bill cartItems={cartItems} />
      </div>

      <h3>
        Please proceed to payment below.
      </h3>
        <Payment />
    </div>
  );
};

export default Checkout;
