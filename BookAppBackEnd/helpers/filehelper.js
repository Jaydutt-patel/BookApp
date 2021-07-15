"use strict";
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});
const filefilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
    return cb(new Error("only upload files with jpg, jpeg, png format."));
  }
  cb(undefined, true); // continue with upload
};

const upload = multer({ storage: storage, fileFilter: filefilter });

module.exports = { upload };
