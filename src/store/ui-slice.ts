import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  cartIsVisible: false,
};

const uiSlice = createSlice({
  initialState: initialValue,
  name: "ui",
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice;
