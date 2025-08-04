import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDish } from "./get-dish.js";
import { getDishes } from "./get-dishes.js";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  extraReducers: (builder) =>
    builder
      .addCase(getDish.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        entityAdapter.addMany(state, payload);
      })
});

const selectDishesSlice = (state) => state[dishesSlice.name];
export const {
  selectById: selectDishById
} = entityAdapter.getSelectors(selectDishesSlice);

