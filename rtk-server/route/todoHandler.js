const express = require("express");
const route = express.Router();
const Todo = require("../model/todoSchema.js");

route.get("/", async (req, res) => {
  try {
    const result = await Todo.find({});
    res.status(200).json({
      message: "Data Successfull",
      data: result,
    });
  } catch {
    res.status(404).json({
      error: "Data not found",
    });
  }
});
route.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Todo.findById({ _id: id });
    res.status(200).json({
      message: "Data Successfull",
      data: result,
    });
  } catch {
    res.status(404).json({
      error: "Data not found",
    });
  }
});

route.post("/", async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(200).json({
      message: "Todo Added Successfull",
    });
  } catch {
    res.status(500).json({
      message: "Todo Failed to added",
    });
  }
});

route.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const filter = { _id: id };
    const body = req.body;
    let result = await Todo.findOneAndUpdate(filter, body);
    res.status(201).json({
      data: result,
      message: "updated successfull",
    });
  } catch {
    res.status(204).json({
      message: "Failed to update",
    });
  }
});
route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todo.deleteOne({ _id: id });
    if (result.acknowledged) {
      res.status(202).json({
        message: "Delete Successfull",
      });
    } else {
      res.status(204).json({
        error: "Failed to delete",
      });
    }
  } catch {
    res.status(204).json({
      error: "Failed to delete",
    });
  }
});
module.exports = route;
