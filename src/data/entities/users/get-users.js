import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUsersIds } from "./slice.js";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    console.log(`Грузим пользователей с сервера !!!`);
    const response = await fetch(`http://localhost:3001/api/users`);
    const result = await response.json();
    if (!result.length) {
      return rejectWithValue(`No users found.`);
    } else {
      console.log(`Пользователи:`, result);
    }
    return result;
  },
  {
    condition: (restaurantId, { getState }) => !selectUsersIds(getState()).length,
    dispatchConditionRejection: true
  }
);