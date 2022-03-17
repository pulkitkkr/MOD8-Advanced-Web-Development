const express = require("express");
const router = express.Router();

const getPGClient = require("./connectServer");

const tryToConnect = () => {
  const newClient = getPGClient();
  newClient.connect();

  return newClient;
};


router.get('/getNumberOfUser', function (req, res) {
  const client = tryToConnect();

  client.query('SELECT count(*) FROM "pulkitkkr/TabletPastrami"."users";', (err, pgResp) => {
    let count = pgResp.rows[0].count;

    res.setHeader("Content-Type", "application/json");
    res.send({count: count});
    client.end();
  });

})

router.post('/detail', function(req, res){
  const name = req.body.name;
  const id = req.body.id;
  const client = tryToConnect();
  const queryString = `INSERT INTO "pulkitkkr/TabletPastrami"."users" VALUES (${id}, '${name}');`;

  client.query(queryString, (err, resp) => {
    let isSuccess = true;

    if(err){
      isSuccess = false;
    }

    res.setHeader('Content-Type', 'application/json');
    res.send({isSuccess, result: err|| resp.rows[0]});
    client.end()
  })
})

router.delete("/detail/:id", function (req, res){
  const id = req.params.id;
  const client = tryToConnect();

  const queryString = `DELETE FROM "pulkitkkr/TabletPastrami"."users" where id=${id};`;
  client.query(queryString, (err, resp) => {
    let isSuccess = true;

    if(err){
      isSuccess = false;
    }

    res.setHeader('Content-Type', 'application/json');
    res.send({isSuccess, result: err|| resp.rows[0]});
    client.end();
  });
})

router.get("/detail/:id", (req, res) => {
  const id = req.params.id;
  const client = tryToConnect();

  const queryString = `SELECT * FROM "pulkitkkr/TabletPastrami"."users" where id=${id};`;

  client.query(queryString, (err, resp) => {
    let isSuccess = true;

    if(err){
      isSuccess = false
    }

    res.setHeader('Content-Type', 'application/json');
    res.send({isSuccess, result: err || resp.rows[0]});
    client.end();
  })
})

router.patch("/detail", (req, res) => {
  const name = req.body.name;
  const id = req.body.id;
  const client = tryToConnect();


  const queryString = `UPDATE "pulkitkkr/TabletPastrami"."users" SET (id, name) = (${id}, '${name}') where id=${id};`;

  client.query(queryString, (err, resp) => {
    let isSuccess = true;

    if(err){
      isSuccess = false;
    }

    res.setHeader('Content-Type', 'application/json');
    res.send({isSuccess, result: err|| resp.rows[0]});
    client.end();
  })
})
// UPDATE "pulkitkkr/TabletPastrami"."users" SET (id, name) = (1, 'updated') where id=1;

/*

router.post('/detail', function (req, res) {
  const name = req.body.name;
  const id = req.body.id;
  const client = tryToConnect();
  const query = `INSERT INTO "pulkitkkr/TabletPastrami"."users" VALUES (${id}, '${name}');`;

  console.log(query);
  client.query(query, (err, resp) => {
    let isSuccess = true;

    if(err){
      console.log(err);
    }
    res.setHeader('Content-Type', 'application/json');
    res.send({isSuccess, result: err|| resp.rows[0]});
    client.end();
  });
})

router.get('/detail/:id', function (req, res) {
  const id = req.params.id;
  const client = tryToConnect();

  const query = `SELECT * FROM "pulkitkkr/TabletPastrami"."users" where id=${id};`;
  console.log(query);

  client.query(query, (err, resp) => {
    let isSuccess = true;

    if(err){
      console.log(err);
    }
    res.setHeader('Content-Type', 'application/json');
    res.send({isSuccess, result: err|| resp.rows[0]});
    client.end();
  });
})

router.delete('/detail/:id', function (req, res) {
  const id = req.params.id;
  const client = tryToConnect();

  const query = `DELETE FROM "pulkitkkr/TabletPastrami"."users" where id=${id};`;
  console.log(query);

  client.query(query, (err, resp) => {
    let isSuccess = true;

    if(err){
      console.log(err);
    }
    res.setHeader('Content-Type', 'application/json');
    res.send({isSuccess, result: err|| resp.rows[0]});
    client.end();
  });
})
* */

module.exports = router;
