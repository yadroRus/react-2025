import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "../entities/restaurants/slice.js";
import { dishesSlice } from "../entities/dishes/slice.js";
import { reviewsSlice } from "../entities/reviews/slice.js";
import { usersSlice } from "../entities/users/slice.js";
import { cartSlice } from "../entities/cart/slice.js";
import { requestSlice } from "../entities/request/sliсe.js";
import { api } from "../services/api/api.js";

const loggerMiddleware = (store) => (next) => (action) => {
  console.log(action);
  return next(action);
};

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat( api.middleware)
});