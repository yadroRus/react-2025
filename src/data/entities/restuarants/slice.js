import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../../materials/normolized-mock.js";
import { guid, setDefaultInitialState } from "../../helpers.js";

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: setDefaultInitialState(normalizedRestaurants),
  selectors: {
    selectRestaurantById: ((state, id) => state.entities[id]),
    selectRestaurantsIds: ((state) => state.ids)
  },
  reducers: {
    addComment: (state, { payload }) => {
      const { restaurantId, commentId } = payload;
      state.entities[restaurantId].reviews ??= [];
      state.entities[restaurantId].reviews.push(commentId);
    }
  }
});

export const { selectRestaurantById, selectRestaurantsIds } = restaurantsSlice.selectors;
export const { addComment } = restaurantsSlice.actions;
