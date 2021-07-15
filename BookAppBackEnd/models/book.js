// import mongoose from "mongoose";
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  price: Number,
  author: String,
  rating: Number,
  category: String,
  desc: String,
  file: [Object],
});

const Book = new mongoose.model("Book", bookSchema);

module.exports = Book;
