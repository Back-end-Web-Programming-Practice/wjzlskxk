const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  //   res.send("Hello Expresss");
  res.render("index", { title: "Express" });
});

module.exports = router;
