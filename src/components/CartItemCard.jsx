import React from 'react';
import { useDispatch } from 'react-redux'; // Make sure this is imported
import { removeFromCart } from '../redux/cartSlice';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const CartItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item-card">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>${item.cost.toFixed(2)}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <IconButton onClick={handleRemoveFromCart}>
        <RemoveCircleIcon />
      </IconButton>
    </div>
  );
};

export default CartItemCard;
