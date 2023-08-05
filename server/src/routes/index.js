const express = require('express');
const { clientError, errHandler } = require('../middleware');
const {
  signupIndividualController,
  signupBusinessController
} = require('../controller');

const router = express.Router();

router.post('/signup/individual', signupIndividualController);
router.post('/signup/business', signupBusinessController);

router.use(clientError);
router.use(errHandler);

module.exports = router;
