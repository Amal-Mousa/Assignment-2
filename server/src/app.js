const dotenv = require('dotenv');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const router = require('./routes');

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 8080);

app.use([
  compression({
    level: 6
  }),
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: false }),
  cors()
]);
app.use('/api', router);

module.exports = app;
