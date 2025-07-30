import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishes = createAsyncThunk(
  "dishes/getDishes",
  async (restaurantId, { rejectWithValue }) => {
    const cachedDishes = sessionStorage.getItem(`dishes-${restaurantId}`);
    if (cachedDishes) {
      return JSON.parse(cachedDishes);
    }
    console.log(`Грузим блюда для ресторана ${restaurantId} !!!`);
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
    const result = await response.json();

    if (!result.length) {
      return rejectWithValue(`No dish ${restaurantId} found.`);
    } else {
      console.log(`Блюда:`, result);
    }

    sessionStorage.setItem(`dishes-${restaurantId}`, JSON.stringify(result));
    return result;
  }
);