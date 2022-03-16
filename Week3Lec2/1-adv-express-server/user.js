const express = require("express");
const router = express.Router();

router.get('/:id', function (req, res) {
  const abc = req.params.id;
  res.send("Hello User: "+abc);
})

router.get('/:id/:second', function (req, res) {
  const id = req.params.id;
  const second = req.params.second;

  res.send("Hello User: "+id + "second is: "+ second);
})

router.get('/:id/a', function (req, res) {
  const abc = req.params.id;
  res.send("Hello User: "+abc+" you are visiting "+" /"+abc+"/a");
})

module.exports = router;
