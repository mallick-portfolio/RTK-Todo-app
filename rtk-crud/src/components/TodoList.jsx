import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openTodoModal } from "../features/todoSlice.js";
import { useGetAllTodoQuery } from "../services/todo.js";
import TodoModal from "./TodoModal.jsx";
import TodoRow from "./TodoRow.jsx";

const TodoList = () => {
  const isModalOpen = useSelector(
    (state) => state?.reducers?.todos?.isModalOpen
  );
  const dispatch = useDispatch();
  const { data: todos, isError, isLoading } = useGetAllTodoQuery();
  if (isLoading) {
    return "loading...";
  }
  if (isError) {
    return "Something is error";
  }
  return (
    <div className="px-16 mx-auto py-6">
      <button
        className="px-8 py-4 bg-white shadow-2xl text-black rounded-lg"
        onClick={() => dispatch(openTodoModal(true))}
      >
        Add New Todo
      </button>
      <div className="pt-6">
        {todos?.data?.map((todo) => (
          <TodoRow key={todo?._id} todo={todo} />
        ))}
      </div>
      {isModalOpen && <TodoModal />}
    </div>
  );
};

export default TodoList;
