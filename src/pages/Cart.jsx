import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItemCard from '../components/CartItemCard';
import { clearCart } from '../redux/cartSlice';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  var totalBill = cartItems.reduce((sum, item) => sum + item.cost, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  function hdnleCheckout(){
    cartItems.length > 0 
    ? navigate('/checkout') 
    : alert('Please add some items to the cart before checking out!')
  }
  function handleContinue(){
    navigate('/products')
  }

  return (
    <div className="cart-page">
      < NavBar />
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItemCard key={item.id} item={item} />
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      
        <h2
        className='total-cart-page'
         >
          Total: ${totalBill}
        </h2>
      
        <div className="cartButton">
        <button
        className='clear-cart'
        onClick={() => dispatch(clearCart())}>Clear Cart</button>

        <button
        className='continue-shopping'
        onClick={handleContinue}
        >
          Conitnue Shopping
        </button>

        <button
        className='check-out'
        onClick={hdnleCheckout}>Chechkout</button>
        </div>
        <Footer />
    </div>
  );
};

export default Cart;
