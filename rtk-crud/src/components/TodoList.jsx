import React from "react";
import { useGetAllTodoQuery } from "../services/todo.js";
import TodoRow from "./TodoRow.jsx";

const TodoList = () => {
  const { data: todos, isError, isLoading } = useGetAllTodoQuery();
  if (isLoading) {
    return "loading...";
  }
  if (isError) {
    return "Something is error";
  }
  return (
    <div className="px-16 mx-auto py-6">
      <button className="px-8 py-4 bg-white shadow-2xl text-black rounded-lg">
        Add New Todo
      </button>
      <div className="pt-6">
        {todos?.data?.map((todo) => (
          <TodoRow key={todo?._id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
