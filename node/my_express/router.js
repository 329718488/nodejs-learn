const express = require("express");
const router = express.Router();
const yewu = require("./yewu");


router
  .get("/", yewu.getHtml)
  .get("/login",yewu.getLoginHtml)
  // .post("/insert", yewu.insertOne);
  .post("/upload", yewu.upload)
  .post("/login",yewu.login)

module.exports = router;
