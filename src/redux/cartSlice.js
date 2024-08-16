import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(item => item.id === itemId);
      
      if (existingItem) {
        if (existingItem.quantity > 1) {
          // If quantity is more than 1, decrease quantity
          existingItem.quantity -= 1;
        } else {
          // If quantity is 1, remove the item
          state.items = state.items.filter(item => item.id !== itemId);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    getItemQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      return item ? item.quantity : 0;
    }
  }
});


export const { addToCart, removeFromCart, clearCart, getItemQuantity } = cartSlice.actions;


export default cartSlice.reducer;

export const selectItemQuantity = (state, itemId) => {
  const item = state.cart.items.find(item => item.id === itemId);
  return item ? item.quantity : 0;
};
