import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../../materials/normolized-mock.js";
import { setDefaultInitialState } from "../../helpers.js";

export const usersSlice = createSlice({
  name: "users",
  initialState: setDefaultInitialState(normalizedUsers),
  selectors: {
    selectUserById: ((state, id) => state.entities[id]),
    selectUsersIds: ((state) => state.ids)
  }
});

export const { selectUsersIds, selectUserById } = usersSlice.selectors;

