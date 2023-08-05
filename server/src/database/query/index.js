const emailExistsQuery = require('./emailExist');
const userQuery = require('./user.js');
const signupIndividualQuery = require('./signupIndividual');
const signupBusinessQuery = require('./signupBusiness');

module.exports = {
  emailExistsQuery,
  userQuery,
  signupIndividualQuery,
  signupBusinessQuery
};
