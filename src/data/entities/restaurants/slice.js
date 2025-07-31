import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants.js";
import { getRestaurant } from "./get-restaurant.js";

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
        entityAdapter.addMany(state, payload);
      })
      .addCase(getRestaurant.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      })
});

const selectRestaurantsSlice = (state) => state[restaurantsSlice.name];
export const {
  selectIds: selectRestaurantsIds,
  selectById: selectRestaurantById
} = entityAdapter.getSelectors(selectRestaurantsSlice);

export const { addComment } = restaurantsSlice.actions;
