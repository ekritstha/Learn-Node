const express = require("express");
const router = express.Router();

// Do work here
router.get("/", (req, res) => {
  // res.send("Hey! It works!");

  // const animal = { name: "dog", age: 9 };
  // res.json(animal);

  //to get from url use req
  // res.send(req.query.name);
  // res.json(req.query);
  res.render("hello", {
    name: "akrit",
    dog: "kale",
  });
});

router.get("/reverse/:name", (req, res) => {
  const reverse = [...req.params.name].reverse().join("");
  res.send(reverse);
});

module.exports = router;
