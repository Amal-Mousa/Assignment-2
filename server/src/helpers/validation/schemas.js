const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .regex(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required(),
  phone: Joi.string().required(),
  password: Joi.string()
    .min(8)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .required(),
  confirm_password: Joi.valid(Joi.ref('password')).required()
});

const individualSchema = Joi.object({
  first_name: Joi.string().min(3).required(),
  last_name: Joi.string().min(3).required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  address: Joi.string().min(3).required(),
  birth_date: Joi.date().max('now').iso().required()
});

const businessSchema = Joi.object({
  company_name: Joi.string().min(3).required(),
  address: Joi.string().min(3).required()
});

const signupIndividualSchema = Joi.object({
  user: userSchema,
  individual: individualSchema
});

const signupBusinessSchema = Joi.object({
  user: userSchema,
  business: businessSchema
});

module.exports = { signupIndividualSchema, signupBusinessSchema };
