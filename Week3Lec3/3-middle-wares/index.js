const express = require('express');

const app = express();

function myFirstMiddleware(req, res, next) {
  console.log("Hello from the first middleware");

  next();
}


app.get('/', (req, res, next) => {
  console.log("Handling Route Now...")
  res.send("<h1>Hello</h1>")
  next();
})

app.use(myFirstMiddleware);

app.listen(8081);

