const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require("./routes/userRoutes")
const defaultHeaderMiddleware = require("./middlewares/defaultHeader")
const logDetailMiddleware = require("./middlewares/logUserDetail")

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logDetailMiddleware);
app.use(defaultHeaderMiddleware);
app.use("/user", userRoutes);

app.listen(8081);
