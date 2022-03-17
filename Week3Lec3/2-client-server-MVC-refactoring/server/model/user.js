const utility = require("../utility/index")

const DATABASE_NAME = "pulkitkkr/TabletPastrami";
const TABLE_NAME = "users";

const TABLE_PATH = `"${DATABASE_NAME}"."${TABLE_NAME}"`;

const getCount= async () => {
  const client = utility.tryToConnect();
  const sqlQuery = `SELECT count(*) FROM ${TABLE_PATH};`

  try {
    const pgResp = await client.query(sqlQuery)
    console.log(pgResp.rows[0]);
    client.end();
    return pgResp.rows[0].count;
  } catch (err) {
    console.log(err.stack)
    client.end();
    return null;
  }
}


const deleteById = async id => {
  const client = utility.tryToConnect();

  const sqlQuery = `DELETE FROM ${TABLE_PATH} where id=${id};`;

  try {
    const pgResp = await client.query(sqlQuery)
    console.log(pgResp.rows[0]);
    client.end();
    return true;
  } catch (err) {
    console.log(err.stack)
    client.end();
    return false;
  }

}

const getById = async id => {
  const client = utility.tryToConnect();

  const sqlQuery = `SELECT * FROM ${TABLE_PATH} where id=${id};`;

  try {
    const pgResp = await client.query(sqlQuery)
    console.log(pgResp.rows[0]);
    client.end();

    return pgResp.rows[0];
  } catch (err) {
    console.log(err.stack)
    client.end();

    return { };
  }
}

const update = async (id, name) => {
  const client = utility.tryToConnect();

  const sqlQuery = `UPDATE ${TABLE_PATH} SET (id, name) = (${id}, '${name}') where id=${id};`;

  try {
    const pgResp = await client.query(sqlQuery)
    console.log(pgResp.rows[0]);
    client.end();
    return true;
  } catch (err) {
    console.log(err.stack)
    client.end();
    return false;
  }
}

const create = async (id, name) => {
  const client = utility.tryToConnect();

  const sqlQuery = `INSERT INTO ${TABLE_PATH} VALUES (${id}, '${name}');`

  try {
    const pgResp = await client.query(sqlQuery)
    console.log(pgResp.rows[0]);
    client.end();
    return true;
  } catch (err) {
    console.log(err.stack)
    client.end();
    return false;
  }
}



module.exports = {
  getCount: getCount,
  deleteById: deleteById,
  getById: getById,
  update,
  create
}
