const express = require("express");
const router = express.Router()

router.get("", (req, res) => { 
  res.send("Hello World!");
  res.status(200);
});

module.exports = router;