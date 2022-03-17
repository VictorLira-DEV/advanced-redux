import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  initialState: {
    items: [
      {
        id: '',
        price: 0,
        quantity: 0,
        totalPrice: 0,
        name: '',
      },
    ],
    totalQuantity: 0,
    changed: false
  },
  name: 'cart',
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item: any) => item.id === newItem.id
      );
      state.totalQuantity++;
      state.changed = true
      if (!existingItem) {
        //we shouldn't use this if we were using just REDUX
        //because we are "manipulating" the state
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item: any) => item.id === id);
      state.totalQuantity--;
      state.changed = true
      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item: any) => item.id !== id);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem!.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
