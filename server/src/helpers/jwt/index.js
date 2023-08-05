const Jwt = require('jsonwebtoken');

require('dotenv').config();

const { SECRET_KEY } = process.env;

const signToken = (payload) =>
  new Promise((resolve, reject) => {
    Jwt.sign(payload, SECRET_KEY, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });

module.exports = signToken;
