const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const bookRouter = require("./routes/bookRoute");
const userRouter = require("./routes/userRoute");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

//mongo Setup
const uri = process.env.MONGO_CONN;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo Db connected Successfully");
});

//URL's
app.use("/user", userRouter);
app.use("/book", bookRouter);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//App Server
app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
