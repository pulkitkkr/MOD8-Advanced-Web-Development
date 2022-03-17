/*
1. GET /getNumberOfUser
2. POST /detail
3. DELETE /detail/:id
4. GET /detail/:id
5. PATCH /detail
* */

// This File should only define routes, and map them to corresponding controller methods

const express = require("express");
const router = express.Router();
const userController = require('../controller/userController.js')

router.get('/getNumberOfUser', userController.getNumberOfUser);
router.post('/detail', userController.postDetail);
router.delete('/detail/:id', userController.deleteDetail);
router.get('/detail/:id', userController.getUserDetail);
router.patch('/detail', userController.updateDetail);

module.exports = router;
