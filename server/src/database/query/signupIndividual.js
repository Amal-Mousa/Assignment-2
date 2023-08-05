const connection = require('../config');

const signupIndividualQuery = ({
  id,
  firstName,
  lastName,
  gender,
  address,
  birthDate
}) => {
  const individualQuery = {
    text: `INSERT INTO individual_users (id, first_name, last_name, gender, address, birth_date) 
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    values: [id, firstName, lastName, gender, address, birthDate]
  };
  return connection.query(individualQuery);
};

module.exports = signupIndividualQuery;
