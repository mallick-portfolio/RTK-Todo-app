import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => {
        return {
          url: "/posts",
          method: "GET",
        };
      },
    }),
    getPostById: builder.query({
      query: (id) => {
        return {
          url: `/posts/${id}`,
          method: "GET",
        };
      },
    }),
    deletePostByID: builder.mutation({
      query: (id) => {
        return {
          url: `/posts/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useDeletePostByIDMutation,
} = postApi;
