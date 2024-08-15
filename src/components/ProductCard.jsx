import React, { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DoneIcon from '@mui/icons-material/Done';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...plant, quantity: 1, id: plant.id }));
    setAdded(true);

    // Revert to the original button after 5 seconds
    setTimeout(() => {
      setAdded(false);
    }, 5000);
  };

  return (
    <div className="product-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <p>${plant.cost.toFixed(2)}</p>
      <IconButton onClick={handleAddToCart}>
        {added ? <DoneIcon /> : <AddShoppingCartIcon />}
      </IconButton>
    </div>
  );
};

export default ProductCard;
