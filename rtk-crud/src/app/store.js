import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "../services/posts.js";
import { todoApi } from "../services/todo.js";

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([postApi.middleware, todoApi.middleware]),
});
setupListeners(store.dispatch);
