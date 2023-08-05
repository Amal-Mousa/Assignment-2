const connection = require('../config');

const userQuery = ({ email, phone, password }) => {
  const userQuery = {
    text: 'INSERT INTO users (email, phone, password) VALUES ($1, $2, $3) RETURNING *',
    values: [email, phone, password]
  };
  return connection.query(userQuery);
};

module.exports = userQuery;
