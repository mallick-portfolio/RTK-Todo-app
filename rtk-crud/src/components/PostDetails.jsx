import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../services/posts.js";

const PostDetails = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetPostByIdQuery(id);
  if (isLoading) {
    return "loading...";
  }
  if (isError) {
    console.log(isError);
  }
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <Link to={"/"}>Go home</Link>
    </div>
  );
};

export default PostDetails;
