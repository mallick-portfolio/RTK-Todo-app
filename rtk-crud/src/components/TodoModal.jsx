import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openTodoModal } from "../features/todoSlice.js";

const TodoModal = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center h-screen fixed top-0 left-0 bg-white right-0 bottom-0 w-full z-50 overflow-hidden">
      <div className="w-1/2 bg-white p-8 rounded-lg shadow-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sed
        impedit suscipit qui voluptas incidunt. Minima autem aliquid dolore,
        corporis blanditiis, dolorem deserunt nostrum veniam tenetur quas itaque
        libero suscipit?
        <div className="flex pt-4 justify-between items-center">
          <button
            className="px-4 py-2 rounded-md bg-red-500 text-white text-base"
            onClick={() => dispatch(openTodoModal(false))}
          >
            Cancel
          </button>
          <button className="px-4 py-2 rounded-md bg-blue-500 text-white text-base">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
