const bcrypt = require('bcrypt');
const {
  emailExistsQuery,
  userQuery,
  signupBusinessQuery
} = require('../database');
const { CustomError, signupBusinessSchema } = require('../helpers');

const signupBusinessController = (req, res, next) => {
  const {
    body: { company_name, address, email, phone, password, confirm_password }
  } = req;

  let userId;

  signupBusinessSchema
    .validateAsync(
      {
        user: {
          email,
          phone,
          password,
          confirm_password
        },
        business: {
          company_name,
          address
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
      return signupBusinessQuery({
        id: userId,
        companyName: company_name,
        address: address
      });
    })
    .then(({ rows }) => {
      const businessUserData = {
        id: userId,
        company_name: rows[0].company_name,
        address: rows[0].address,
        email: email,
        phone: phone
      };
      return businessUserData;
    })
    .then((businessUserData) => {
      res.json({
        status: 200,
        message: 'Business account has been successfully created.',
        data: businessUserData
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

module.exports = signupBusinessController;
