const connection = require('../config');

const signupBusinessQuery = ({ id, companyName, address }) => {
  const businessQuery = {
    text: `INSERT INTO business_users (id, company_Name, address) 
      VALUES ($1, $2, $3) RETURNING *`,
    values: [id, companyName, address]
  };
  return connection.query(businessQuery);
};

module.exports = signupBusinessQuery;
