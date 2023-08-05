const bcrypt = require('bcrypt');
const {
  emailExistsQuery,
  userQuery,
  signupIndividualQuery
} = require('../database');
const { CustomError, signupIndividualSchema } = require('../helpers');

const signupIndividualController = (req, res, next) => {
  const {
    body: {
      first_name,
      last_name,
      address,
      email,
      phone,
      password,
      confirm_password,
      gender,
      birth_date
    }
  } = req;

  let userId;

  signupIndividualSchema
    .validateAsync(
      {
        user: {
          email,
          phone,
          password,
          confirm_password
        },
        individual: {
          first_name,
          last_name,
          gender,
          address,
          birth_date
        }
      },
      { abortEarly: true }
    )
    .then(() => emailExistsQuery(email))
    .then((exists) => {
      if (exists.rows[0].exists !== false) {
        throw new CustomError(406, 'Email already exists ');
      }
      return bcrypt.hash(password, 10);
    })
    .then((hash) => {
      return userQuery({ email, phone, password: hash });
    })
    .then(({ rows }) => {
      userId = rows[0].id;
      return signupIndividualQuery({
        id: userId,
        firstName: first_name,
        lastName: last_name,
        gender: gender,
        address: address,
        birthDate: birth_date
      });
    })
    .then(({ rows }) => {
      const userData = {
        id: userId,
        first_name: rows[0].first_name,
        last_name: rows[0].last_name,
        address: rows[0].address,
        email: email,
        phone: phone,
        gender: rows[0].gender,
        birth_date: rows[0].birth_date
      };
      return userData;
    })
    .then((userData) => {
      res.json({
        status: 200,
        message: 'Individual account has been successfully created.',
        data: userData
      });
    })
    .catch((error) => {
      if ('isJoi' in error) {
        next(new CustomError(406, error.details[0].message));
      } else {
        next(error);
      }
    });
};

module.exports = signupIndividualController;
