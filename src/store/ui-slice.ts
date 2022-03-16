import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
  cartIsVisible: false,
  notification: {},
};

const uiSlice = createSlice({
  initialState: initialValue,
  name: 'ui',
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice;
