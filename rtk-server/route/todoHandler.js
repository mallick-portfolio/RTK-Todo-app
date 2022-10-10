const mongoose = require("mongoose");
const express = require("express");
const route = express.Router();
const Todo = require("../model/todoSchema.js");

route.get("/", async (req, res) => {
  const result = await Todo.find({});
  console.log(result);
  res.status(200).json({
    message: "Data Successfull",
    data: result,
  });
});
route.post("/", async (req, res) => {});
route.put("/:id", async (req, res) => {});
route.delete("/:id", async (req, res) => {});
module.exports = route;
