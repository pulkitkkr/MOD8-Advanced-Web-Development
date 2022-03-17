const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require("./user")
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/user", userRouter);

app.listen(8081);
