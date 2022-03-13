import { configureStore } from "@reduxjs/toolkit";
import displayItem from "./displayItem";

const store = configureStore({
  reducer: { displayItem: displayItem.reducer },
});

export default store;
