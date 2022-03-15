import { createSlice } from "@reduxjs/toolkit";

createSlice({
  initialState: {
    items: [
      {
        itemId: '',
        price: 0,
        quantity: 0,
        totalPrice: 0,
        name: '',
      },
    ],
    totalQuantity: 0,
  },
  name: "cart",
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item: any) => item.id === newItem.id
      );
      if (!existingItem) {
        //we shouldn't use this if we were using just REDUX
        //because we are "manipulating" the state
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
      }
    },

    removeItemFromCart() {},
  },
});
