import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "./slice.js";

export const getRestaurant = createAsyncThunk(
  "restaurants/getRestaurant",
  async (restaurantId, { rejectWithValue }) => {
    console.log(`Гризум ресторан ${restaurantId} !!!`);
    const response = await fetch(`http://localhost:3001/api/restaurant/${restaurantId}`);
    const result = await response.json();

    if (!result.id) {
      return rejectWithValue(`No restaurant ${restaurantId} found.`);
    } else {
      console.log(`Ресторан:`, result);
    }
    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurant = selectRestaurantById(state, restaurantId);
      return !restaurant?.menu;
    },
    dispatchConditionRejection: true
  }
);