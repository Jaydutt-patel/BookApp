const router = require("express").Router();
let User = require("../models/user");

router.get("/user", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error:` + err));
});

router.post("/addUser", (req, res) => {
  const userFName = req.body.userFName;
  const userLName = req.body.userLName;
  const emailId = req.body.emailId;
  const password = req.body.password;
  const type = req.body.type;

  const newUser = new User({
    userFName,
    userLName,
    emailId,
    password,
    type,
  });

  newUser
    .save()
    .then(() => res.json("New User Added Successfully"))
    .catch((err) => res.json(`Error: ` + err));
});

module.exports = router;
