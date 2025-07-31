import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./get-reviews.js";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
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
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        entityAdapter.addMany(state, payload);
      })
});
const selectReviewsSlice = (state) => state[reviewsSlice.name];
export const {
  selectById: selectReviewById,
  selectIds: selectReviewsIds
} = entityAdapter.getSelectors(selectReviewsSlice);

export const { addComment } = reviewsSlice.actions;
