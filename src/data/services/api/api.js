import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  // pollingInterval: 5000,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api"
  }),
  tagTypes: ["review"],
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
      providesTags: (_, __, id) => [{ type: "review", id }],
      keepUnusedDataFor: 20
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        method: "POST",
        body: review
      }),
      invalidatesTags: (_, __, { id }) => [{ type: "review", id }]
    }),
    getUsers: builder.query({
      query: () => `/users`,
      keepUnusedDataFor: 20
    })
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
  useAddReviewMutation
} = api;