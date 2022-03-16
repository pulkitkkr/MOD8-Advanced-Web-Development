const {Client} = require('pg');

const config = {
    user: 'pulkitkkr_demo_db_connection',
    host: 'db.bit.io',
    database: 'bitdotio',
    password: '3DgHy_9vvjDmS4WqQah7iC7NVF5e9',
    port: 5432
}

const pgClient = new Client(config);

module.exports = pgClient;
