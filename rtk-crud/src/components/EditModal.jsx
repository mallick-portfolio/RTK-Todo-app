import React from "react";

const EditModal = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    author: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
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
            // onClick={() => dispatch(openTodoModal(false))}
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
