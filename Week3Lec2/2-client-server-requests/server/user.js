const express = require("express");
const router = express.Router();

const client = require("./connectServer");


router.post('/detail', function (req, res) {
  const name = req.body.name;
  const id = req.body.id;

  client.connect();
  client.query(`Insert into "pulkitkkr/TabletPastrami"."users" VALUES (${id}, ${name});`, (err, resp) => {
    if(err){
      console.log(err);
    }
    res.setHeader('Content-Type', 'application/json');
    res.send({isSuccess: true});
  })

})


router.get('/getNumberOfUser', function (req, res) {
  client.connect();
  client.query('SELECT count(*) FROM "pulkitkkr/TabletPastrami"."users";', (err, pgResp) => {
    let count = pgResp.rows[0].count;

    res.setHeader("Content-Type", "application/json");
    res.send({count: count});
  });

})


router.get('/:id', function (req, res) {
  const abc = req.params.id;
  res.setHeader("Content-Type", "application/json");

  res.send({
    name: "John DOe",
    id: req.params.id
  });
})



module.exports = router;
