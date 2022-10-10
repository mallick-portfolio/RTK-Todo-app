import React from "react";

const TodoRow = ({ todo }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-2xl my-2 py-4 px-8 rounded-md">
      <h1>{todo?.title}</h1>
      <h1>{todo?.author}</h1>
      <h1>{todo?.description}</h1>
    </div>
  );
};

export default TodoRow;
