const router = require("express").Router();
let Book = require("../models/book");
const { upload } = require("../helpers/filehelper");

router.get("/allBook", (req, res) => {
  Book.find()
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json(`Error:` + err));
});

router.post("/addBook", upload.single("file"), (req, res) => {
  const name = req.body.name;
  const price = Number(req.body.price);
  const author = req.body.author;
  const rating = Number(req.body.rating);
  const category = req.body.category;
  const desc = req.body.desc;
  const { path, mimetype } = req.file;
  const file = {
    file_path: path,
    file_mimetype: mimetype,
  };

  const newBook = new Book({
    name,
    price,
    author,
    rating,
    category,
    desc,
    file,
  });

  newBook
    .save()
    .then(() => res.json("New Book Added Successfully"))
    .catch((err) => res.status(400).json(`Error: ` + err));
});

router.get(`/:id`, (req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json("Book deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/updateBook/:id", (req, res) => {
  // console.log("--------------------------", req.body);
  Book.findById(req.params.id)
    .then((book) => {
      book.name = req.body.name;
      book.price = Number(req.body.price);
      book.rating = Number(req.body.rating);
      book.author = req.body.author;
      book.category = req.body.category;
      book.desc = req.body.desc;
      // console.log(book);
      book.file = req.body.file;

      book
        .save()
        .then(() => res.json("Book updated...!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
