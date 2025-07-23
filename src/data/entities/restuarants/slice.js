import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../../materials/normolized-mock.js";
import { setDefaultInitialState } from "../../helpers.js";

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: setDefaultInitialState(normalizedRestaurants),
  selectors: {
    selectRestaurantById: ((state, id) => state.entities[id]),
    selectRestaurantsIds: ((state) => state.ids)
  }
});

export const { selectRestaurantById, selectRestaurantsIds } = restaurantsSlice.selectors;

