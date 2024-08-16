import React from 'react';
import { useDispatch } from 'react-redux'; // Make sure this is imported
import { addToCart, removeFromCart } from '../redux/cartSlice';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };
  const handleIncreaseQuantaty = ()=>{
    dispatch(addToCart({ ...item, quantity: 1, id: item.id }));
  }
  return (
    <div className="cart-item-card">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>${item.cost.toFixed(2)}</p>
        <p
        className='item-quantity-cart'
        >
        <IconButton
        className='remove-icon-cart'
        onClick={handleRemoveFromCart}>
        <RemoveIcon />
      </IconButton>
          {item.quantity}
          <IconButton
          className='add-icon-cart'
          onClick={handleIncreaseQuantaty}>
        <AddIcon />
      </IconButton>
          
          </p>
      </div>

    </div>
  );
};

export default CartItemCard;
