import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    // Get All Todos
    getAllTodo: builder.query({
      query: () => {
        return {
          url: "todo",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllTodoQuery } = todoApi;
