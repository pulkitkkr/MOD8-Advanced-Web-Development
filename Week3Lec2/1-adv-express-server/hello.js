const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send("You are at root")
})

router.get('/go', function (req, res) {
  res.send("You are at go")
})

router.get('/bye', function (req, res) {
  res.send("You are at bye")
})

module.exports = router;
