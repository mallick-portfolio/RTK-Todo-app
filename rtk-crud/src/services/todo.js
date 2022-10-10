import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    // Get All Todos
    getAllTodo: builder.query({
      query: () => {
        return {
          url: "todo",
          method: "GET",
        };
      },
      providesTags: ["Todo"],
    }),
    getTodo: builder.query({
      query: (id) => {
        return {
          url: `todo/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Todo"],
    }),
    // Add New Todo
    addNewTodo: builder.mutation({
      query: (body) => {
        return {
          url: "todo",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Todo"],
    }),
    editTodo: builder.mutation({
      query: (body) => {
        return {
          url: `todo/${body.id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Todo"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => {
        return {
          url: `todo/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const {
  useEditTodoMutation,
  useGetTodoQuery,
  useGetAllTodoQuery,
  useAddNewTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
