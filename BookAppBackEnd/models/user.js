// import mongoose from "mongoose";
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userFName: { type: String, required: true },
  userLName: { type: String, required: true },
  emailId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  type: { type: String, required: true }, //admin or normal user
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
