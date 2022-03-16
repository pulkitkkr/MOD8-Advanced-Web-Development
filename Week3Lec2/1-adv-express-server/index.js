const express = require('express');
const helloRouter = require('./hello');
const byeRouter = require('./bye/bye');
const userRouter = require("./user")

const app = express();

app.use("/hello", helloRouter);
app.use("/bye", byeRouter);
app.use("/user", userRouter);


app.listen(8081);
