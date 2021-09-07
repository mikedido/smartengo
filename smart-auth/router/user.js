const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const userController = require('../controllers/user');


router.post('/signup', userController.signup);

router.post('/signin', userController.login);

router.get('/', auth, userController.getAllUsers);

router.get('/:userId', auth, userController.getUser);

router.get('/', auth, userController.getAllUsers);

router.delete('/:userId', auth, userController.delete);

router.put('/:userId', auth, userController.update);

module.exports = router;