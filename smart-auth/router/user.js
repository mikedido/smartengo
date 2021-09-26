const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const userController = require('../controllers/user');


router.get('/signup', userController.signup);

module.exports = router;