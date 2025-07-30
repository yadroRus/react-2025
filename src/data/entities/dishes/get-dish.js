import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "./slice.js";

export const getDish = createAsyncThunk(
  "dishes/getDish",
  async (dishId, { rejectWithValue }) => {
    console.log(`Грузим блюдо ${dishId} !!!`);
    const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
    const result = await response.json();

    if (!result.id) {
      return rejectWithValue(`No dish ${dishId} found.`);
    } else {
      console.log(`Блюдо:`, result);
    }
    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const dish = selectDishById(state, restaurantId);
      return !dish?.ingredients;
    },
    dispatchConditionRejection: true
  }
);