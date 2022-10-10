import React from "react";
import { useDeleteTodoMutation } from "../services/todo.js";
const TodoRow = ({ todo }) => {
  const [deleteTodo, res] = useDeleteTodoMutation();
  const handleDelete = async (id) => {
    const result = await deleteTodo(id);
  };

  return (
    <div className="flex justify-between items-center bg-white shadow-2xl my-2 py-4 px-8 rounded-md">
      <h1>{todo?.title}</h1>
      <h1>{todo?.author}</h1>
      <h1>{todo?.description}</h1>
      <div className="flex items-center gap-6">
        <button className="px-4 py-2 bg-blue-400 text-white rounded-md">
          Edit
        </button>
        <button
          onClick={() => handleDelete(todo?._id)}
          className="px-4 py-2 bg-red-400 text-white rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoRow;
