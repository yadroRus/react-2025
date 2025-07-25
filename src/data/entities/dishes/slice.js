import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../../materials/normolized-mock.js";
import { setDefaultInitialState } from "../../helpers.js";

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: setDefaultInitialState(normalizedDishes),
  selectors: {
    selectDishById: ((state, id) => state.entities[id])
  }
});

export const { selectDishById } = dishesSlice.selectors;