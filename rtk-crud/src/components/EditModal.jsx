import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodoModal } from "../features/todoSlice.js";
import { useEditTodoMutation, useGetTodoQuery } from "../services/todo.js";

const EditModal = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    author: "",
  });
  const dispatch = useDispatch();
  const id = useSelector((state) => state?.reducers?.todos?.updateId);
  const { data: todo, isError, isLoading } = useGetTodoQuery(id);
  const [editTodo, res] = useEditTodoMutation();
  if (isLoading) {
    return "Loading ...";
  }
  if (isError) {
    return "There was a problem";
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      id,
      title: data.title ? data?.title : todo?.data?.title,
      description: data.description
        ? data?.description
        : todo?.data?.description,
      author: data.author ? data?.author : todo?.data?.author,
    };

    const response = await editTodo(body);
    if (response?.data?.message) {
      dispatch(
        editTodoModal({
          status: false,
          id: "",
        })
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen fixed top-0 left-0 bg-gray-50 right-0 bottom-0 w-full z-50 overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="w-1/3 bg-white p-8 rounded-lg shadow-2xl"
      >
        <div className="flex items-center justify-center">
          <div className="mx-auto w-full max-w-[550px]">
            <div action="https://formbold.com/s/FORM_ID" method="POST">
              <div className="mb-1">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Title
                </label>
                <input
                  defaultValue={todo?.data?.title}
                  name="title"
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  type="text"
                  placeholder="Title"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Description
                </label>
                <input
                  defaultValue={todo?.data?.description}
                  name="description"
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  type="text"
                  placeholder="Description"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="subject"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Author
                </label>
                <input
                  defaultValue={todo?.data?.author}
                  name="author"
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  type="text"
                  placeholder="Author"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-4 justify-between items-center">
          <button
            className="px-4 py-2 rounded-md bg-red-500 text-white text-base"
            onClick={() =>
              dispatch(
                editTodoModal({
                  status: false,
                  id: "",
                })
              )
            }
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-blue-500 text-white text-base"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
