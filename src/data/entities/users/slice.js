import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./get-users.js";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
});

const selectUsersSlice = (state) => state[usersSlice.name];
export const {
  selectById: selectUserById,
  selectIds: selectUsersIds
} = entityAdapter.getSelectors(selectUsersSlice);

