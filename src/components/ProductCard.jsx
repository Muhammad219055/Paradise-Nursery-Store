import React, { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,removeFromCart } from '../redux/cartSlice';
import { selectItemQuantity } from '../redux/cartSlice'; // Ensure you have the selector function in your slice or in a separate selectors file
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  const plantId = plant.id;
  const quantity = useSelector((state) => selectItemQuantity(state, plantId));

  const handleAddToCart = () => {
    dispatch(addToCart({ ...plant, quantity: 1, id: plant.id }));
    setAdded(true);


    setTimeout(() => {
      setAdded(false);
    }, 7000);
  };
  const handleRemoveFromCart = ()=>{
    dispatch(removeFromCart(plantId))
  }

  return (
    <div className="product-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <p>${plant.cost.toFixed(2)}</p>
      {added
      ?      <div
      className='after-add-to-cart'
      >
        <RemoveIcon
        onClick = {handleRemoveFromCart}
        className='remove-icon'
        
        />
        {quantity}
        <AddIcon
        className='add-icon'
        onClick = {handleAddToCart}
        />

      </div>
      :<IconButton
      onClick={handleAddToCart}
      >
        <AddShoppingCartIcon/>
      </IconButton>

      }
    </div>
  );
};

export default ProductCard;
