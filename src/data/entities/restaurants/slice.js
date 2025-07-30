import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants.js";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  reducers: {
    addComment: (state, { payload }) => {
      const { restaurantId, commentId } = payload;
      state.entities[restaurantId].reviews ??= [];
      state.entities[restaurantId].reviews.push(commentId);
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = "fulfilled";
      })
});

const selectRestaurantsSlice = (state) => state[restaurantsSlice.name];
export const {
  selectIds: selectRestaurantsIds,
  selectById: selectRestaurantById
} = entityAdapter.getSelectors(selectRestaurantsSlice);

export const { addComment } = restaurantsSlice.actions;
