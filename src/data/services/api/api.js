import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  // pollingInterval: 5000,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api"
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
      keepUnusedDataFor: 20
    }),
    getRestaurantById: builder.query({
      query: (id) => `/restaurant/${id}`,
      keepUnusedDataFor: 20
    }),
    getDishes: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
      keepUnusedDataFor: 20
    }),
    getDishById: builder.query({
      query: (id) => `/dish/${id}`,
      keepUnusedDataFor: 20
    }),
    getReviews: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      keepUnusedDataFor: 20
    }),
    getUsers: builder.query({
      query: () => `/users`,
      keepUnusedDataFor: 20
    }),
  })
});

export const {
  useGetRestaurantsQuery,
  useLazyGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetDishesQuery,
  useGetDishByIdQuery,
  useGetReviewsQuery,
  useGetUsersQuery,
} = api;