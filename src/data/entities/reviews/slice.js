import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../../materials/normolized-mock.js";
import { setDefaultInitialState } from "../../helpers.js";

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: setDefaultInitialState(normalizedReviews),
  selectors: {
    selectReviewById: ((state, id) => state.entities[id]),
    selectReviewsIds: ((state) => state.ids)
  },
  reducers: {
    addComment: (state, { payload }) => {
      const { id, rating, text, userId } = payload;
      state.ids.push(id);
      state.entities[id] = {
        id,
        userId,
        text,
        rating
      };
    }
  }
});

export const { selectReviewById, selectReviewsIds } = reviewsSlice.selectors;
export const { addComment } = reviewsSlice.actions;
