const express = require('express');
const router = express.Router();
const greetingHandler = require('./greeting')

router.use("/greeting", greetingHandler);

module.exports = router;
