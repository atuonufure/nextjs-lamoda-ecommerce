import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, item) => {
      state.items = [...state.items, item];
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
