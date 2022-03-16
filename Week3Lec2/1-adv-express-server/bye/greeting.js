const express = require('express');
const router = express.Router();

router.get('/a', function (req, res) {
  res.send("You are at bye/greetin/a")
})

router.get('/', function (req, res) {
  res.send("You are at bye/greetin")
})

module.exports = router;
