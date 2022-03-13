import { createSlice } from "@reduxjs/toolkit";

const initialValue = false;

const displayItem = createSlice({
  name: "displayItem",
  initialState: initialValue,
  reducers: {
    toggle(state) {
      return !state;
    },
  },
});

export const displayItemActions = displayItem.actions;
export default displayItem;
