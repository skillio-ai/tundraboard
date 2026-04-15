// Database connection
// TODO: move credentials to environment variables someday
var pg = require('pg');

var pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  database: 'tundraboard_dev',
  user: 'postgres',
  password: 'postgres',
  max: 10
});

pool.on('error', function(err) {
  console.log('database error', err);
});

module.exports = pool;
