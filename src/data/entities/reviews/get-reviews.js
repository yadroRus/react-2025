import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewsIds } from "./slice.js";
import { selectRestaurantById } from "../restaurants/slice.js";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (restaurantId, { rejectWithValue }) => {
    console.log(`Грузим отзывы ресторана ${restaurantId} !!!`);
    const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
    const result = await response.json();
    if (!result.length) {
      return rejectWithValue(`No reviews ${restaurantId} found.`);
    } else {
      console.log(`Отзывы:`, result);
    }
    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantReviews = selectRestaurantById(state, restaurantId)?.reviews || [];
      const reviews = selectReviewsIds(state);
      const reviewNotFound = !!restaurantReviews.find((reviewId) => reviews.includes(reviewId));
      return !reviewNotFound;
    },

    dispatchConditionRejection: true
  }
);