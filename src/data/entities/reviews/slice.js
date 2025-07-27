import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../../materials/normolized-mock.js";
import { setDefaultInitialState } from "../../helpers.js";

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: setDefaultInitialState(normalizedReviews),
  selectors: {
    selectReviewById: ((state, id) => state.entities[id]),
    selectReviewsIds: ((state) => state.ids)
  }
});

export const { selectReviewById, selectReviewsIds } = reviewsSlice.selectors;

