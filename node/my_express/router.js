const express = require("express");
const router = express.Router();
const yewu = require("./yewu");


router
  .get("/", yewu.getHtml)
  .post("/insert", yewu.insertOne);

module.exports = router;
