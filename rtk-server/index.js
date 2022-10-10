const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 5000;
const cors = require("cors");
const todoHandler = require("./route/todoHandler.js");
dotenv.config();
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@cluster0.b5fohyo.mongodb.net/rtk-todo?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then((res) => console.log("DB connected"))
  .catch((err) => console.log(err));

// Route middleware
app.use("/todo", todoHandler);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
