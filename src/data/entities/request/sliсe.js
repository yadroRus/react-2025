import { createSlice } from "@reduxjs/toolkit";

export const PENDING = "pending";
export const REJECTED = "rejected";
export const FULFILLED = "fulfilled";
export const IDLE = "idle";

export const requestSlice = createSlice({
  name: "request",
  initialState: {},
  selectors: {
    selectRequestStatus: ((state, requestId) => state[requestId] || IDLE),
    selectIsLoading: ((state, requestId) => state[requestId] === PENDING)
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith(PENDING),
        (state, { meta }) => {
          state[meta.requestId] = PENDING;
        })
      .addMatcher(
        ({ type }) => type.endsWith(REJECTED),
        (state, { meta }) => {
          state[meta.requestId] = meta.condition ? FULFILLED : REJECTED;
        })
      .addMatcher(
        ({ type }) => type.endsWith(FULFILLED),
        (state, { meta }) => {
          state[meta.requestId] = FULFILLED;
        })
});

export const { selectRequestStatus, selectIsLoading } = requestSlice.selectors;