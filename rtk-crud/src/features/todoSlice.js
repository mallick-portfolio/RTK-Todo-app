import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  editTodoMode: false,
  updateId: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    openTodoModal(state, action) {
      state.isModalOpen = action.payload;
    },
    editTodoModal(state, action) {
      state.editTodoMode = action.payload.status;
      state.updateId = action.payload.id;
    },
  },
});

export const { openTodoModal, editTodoModal } = todoSlice.actions;
export default todoSlice.reducer;
