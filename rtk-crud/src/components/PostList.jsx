import React from "react";
import { Link } from "react-router-dom";
import {
  useDeletePostByIDMutation,
  useGetPostsQuery,
} from "../services/posts.js";

const PostList = () => {
  const [deleteData, res] = useDeletePostByIDMutation();
  console.log(res?.isSuccess);
  const { data, error, isLoading } = useGetPostsQuery();
  if (isLoading) {
    return "loading...";
  }
  if (error) {
    console.log(error);
  }
  return (
    <ul className="grid grid-cols-4 gap-5">
      {data.map((post) => (
        <li
          key={post.id}
          className="shadow-2xl rounded-2xl bg-slate-500 text-white px-4 py-2"
        >
          <div>
            <Link to={`/post/${post.id}`}>{post.id}</Link>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
            <button
              onClick={() => deleteData(post.id)}
              className="px-4 py-2 bg-red-500 rounded-md text-white"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
