import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    reduceFromCart: (state, action) => {
      const firstGoodsPart = [...state.items].filter(
        (el) => el.id < action.payload[0].id && el.id !== action.payload[0].id
      );
      const secondGoodsPart = [...state.items].filter(
        (el) => el.id > action.payload[0].id && el.id !== action.payload[0].id
      );
      const chosenGoods = [];
      for (let i = 0; i < action.payload[1] - 1; i++) {
        chosenGoods.push(action.payload[0]);
      }
      state.items = [...firstGoodsPart, ...chosenGoods, ...secondGoodsPart];
    },
    removeFromCart: (state, action) => {
      state.items = [...state.items].filter((el) => el.id !== action.payload.id);
    },
  },
});

export const { addToCart, reduceFromCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
