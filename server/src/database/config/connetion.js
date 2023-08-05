const pg = require('pg');
const {} = require('dotenv/config');

const { NODE_ENV, DEV_DB_URL, DB_URL } = process.env;

let DB = '';

if (NODE_ENV === 'production') {
  DB = DB_URL;
} else {
  DB = DEV_DB_URL;
}

const options = {
  connectionString: DB,
  ssl: NODE_ENV === 'development' ? false : { rejectUnauthorized: false }
};

const connection = new pg.Pool(options);

module.exports = connection;
