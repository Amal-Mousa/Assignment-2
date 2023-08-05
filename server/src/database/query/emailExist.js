const connection = require('../config');

const emailExistsQuery = (email) => {
  const query = {
    text: 'SELECT EXISTS(SELECT 1 FROM users WHERE email = $1)',
    values: [email]
  };
  return connection.query(query);
};

module.exports = emailExistsQuery;
