const express = require('express');
const router = express.Router();

router.post('/', function (req, res) {

})

router.get('/', function (req, res) {
  res.send("<h1>You are at root</h1>")
})

router.get('/go', function (req, res) {
  res.send("You are at go")
})

router.get('/bye', function (req, res) {
  res.send("You are at bye")
})

module.exports = router;
