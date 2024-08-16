import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const CartIcon = () => {
    const items = useSelector((state)=>state.cart.items)
    const itemsCount = items.length;
    const navigate = useNavigate()
    function handleClick(){
        navigate('/cart')
    }
  return (
    <div 
    onClick={handleClick}
    className='cart-icon'>
        
            <p
            className="number-of-items"
            >{itemsCount}</p>
            
        
      <ShoppingCartIcon />
    </div>
  )
}

export default CartIcon
