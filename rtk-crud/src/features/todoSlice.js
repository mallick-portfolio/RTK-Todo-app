import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    openTodoModal(state, action) {
      state.isModalOpen = action.payload;
    },
  },
});

export const { openTodoModal } = todoSlice.actions;
export default todoSlice.reducer;
