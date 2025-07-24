import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    dishes: {}
  },
  selectors: {
    selectCartDishes: ((state) => state.dishes),
    selectCartDishById: ((state, id) => state.dishes[id])
  },
  reducers: {
    addDish: (state, { payload }) => {
      const { id, price } = payload;
      state.dishes[id] ??= { count: 0, totalPrice: 0 };
      state.dishes[id].count++;
      state.dishes[id].totalPrice = state.dishes[id].count * price;
    },
    removeDish: (state, { payload }) => {
      const { id, price } = payload;
      if (!state.dishes[id]) return;
      state.dishes[id].count--;
      state.dishes[id].totalPrice = state.dishes[id].count * price;
      if (!state.dishes[id].count) {
        delete state.dishes[id];
      }
    },
    removeDishCompletely: (state, { payload }) => {
      if (state.dishes[payload]) {
        delete state.dishes[payload];
      }
    },
    removeAllDishes: (state) => {
      state.dishes = {};
    }
  }
});


export const { selectCartDishes, selectCartDishById } = cartSlice.selectors;
export const { addDish, removeDish, removeDishCompletely, removeAllDishes } = cartSlice.actions;


