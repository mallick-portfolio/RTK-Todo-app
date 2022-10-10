import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import PostDetails from "./components/PostDetails.jsx";
import PostList from "./components/PostList.jsx";
import TodoList from "./components/TodoList.jsx";
import Welcome from "./components/Welcome.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </>
  );
};

export default App;
